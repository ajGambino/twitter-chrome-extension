chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ count: 0 });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'resetCount') {
        chrome.storage.local.set({ count: 0 }, function () {
            sendResponse({ success: true });
        });
    } else if (request.action === 'incrementCount') {
        chrome.storage.local.get('count', function (result) {
            const newCount = result.count ? result.count + 1 : 1;
            chrome.storage.local.set({ count: newCount }, function () {
                sendResponse({ success: true, count: newCount });
            });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});
