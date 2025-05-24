// Configuration
const config = {
  botToken: 'YOUR_BOT_TOKEN',
  chatId: 'YOUR_CHAT_ID'
};

// Toast notification function
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Get visitor info
async function getVisitorInfo() {
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    
    const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const locationData = await locationResponse.json();
    
    return {
      ip: ipData.ip,
      city: locationData.city,
      country: locationData.country_name
    };
  } catch (error) {
    console.error('Error getting visitor info:', error);
    return null;
  }
}

// Send message to Telegram
async function sendTelegramMessage(text) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: text
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
}

// Send visitor info to Telegram
async function sendVisitorInfo() {
  const visitorInfo = await getVisitorInfo();
  if (!visitorInfo) return;
  
  const message = `New website visitor:\nIP: ${visitorInfo.ip}\nLocation: ${visitorInfo.city}, ${visitorInfo.country}`;
  await sendTelegramMessage(message);
}

// Send visitor info on page load
window.addEventListener('load', sendVisitorInfo);

async function submitForm() {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const offer = document.querySelector('input[placeholder="Your Offer"]').value;
  
  // Basic validation
  if (!name || !email || !offer) {
    showToast('Please fill in all fields', 'error');
    return;
  }

  const message = `New domain purchase inquiry:\nName: ${name}\nEmail: ${email}\nOffer: ${offer}`;
  
  try {
    const success = await sendTelegramMessage(message);
    if (success) {
      showToast('Your offer has been submitted successfully!');
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    showToast('Failed to submit form. Please try again later.', 'error');
    console.error('Error:', error);
  }
}