chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'incrementCount') {
        console.log('Content: Received incrementCount message');
        chrome.runtime.sendMessage({ action: 'incrementCount' }, function (response) {
            console.log('Content: Sent incrementCount message to background');
            sendResponse(response);
        });
    }
});
