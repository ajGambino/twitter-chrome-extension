chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'incrementCount') {
        console.log('Background: Received incrementCount message');
        chrome.storage.local.get('count', function (result) {
            const newCount = result.count ? result.count + 1 : 1;
            console.log('Background: Current count:', result.count);
            console.log('Background: Updating count to', newCount);
            chrome.storage.local.set({ count: newCount }, function () {
                console.log('Background: Count updated');
                sendResponse({ success: true });
            });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});
