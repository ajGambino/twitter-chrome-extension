chrome.runtime.onMessage.addListener(function (request) {
    document.getElementById('countDisplay').innerText = request.count.toString();
});
