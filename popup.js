function updateCount(count) {
    console.log('Popup script loaded');
    console.log('Updating count:', count);
    const updateCountElement = () => {
        const countElement = document.getElementById('count');
        if (countElement) {
            countElement.innerText = count.toString();
        } else {
            console.log('Count element not found');
            // Retry after a short delay
            setTimeout(updateCountElement, 100);
        }
    };

    // Wait for the DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateCountElement);
    } else {
        updateCountElement();
    }
}



// Call the updateCount function immediately after defining it
updateCount(0);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the count from storage and update the popup UI
    chrome.storage.local.get('count', function (result) {
        const count = result.count || 0;
        updateCount(count);
    });
});
