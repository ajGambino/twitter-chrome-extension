chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ count: 0 });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'resetCount') {
        chrome.storage.local.set({ count: 0 });
        sendResponse({ success: true });
    }
});

function resetCountAtMidnight() {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - Date.now();

    setTimeout(function () {
        chrome.storage.local.set({ count: 0 });
        resetCountAtMidnight();
    }, timeUntilMidnight);
}

resetCountAtMidnight();
