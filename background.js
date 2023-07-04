chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ count: 0 });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'resetCount') {
        chrome.storage.local.set({ count: 0 });
        sendResponse({ success: true });
    } else if (request.action === 'incrementCount') {
        chrome.storage.local.get('count', function (result) {
            const newCount = result.count + 1;
            chrome.storage.local.set({ count: newCount });
        });
    }
});

function resetCountAtMidnight() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    setTimeout(function () {
        chrome.storage.local.set({ count: 0 });
        resetCountAtMidnight();
    }, timeUntilMidnight);
}

resetCountAtMidnight();
