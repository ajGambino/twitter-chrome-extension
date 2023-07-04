// Send a message to the background script when a tweet is loaded
function sendTweetViewedMessage() {
    chrome.runtime.sendMessage({ action: 'incrementCount' });
}

// Listen for tweet load events and send a message
document.addEventListener('DOMContentLoaded', sendTweetViewedMessage);
