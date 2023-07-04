// Function to update the count element with the provided count value
function updateCount(count) {
    const countElement = document.getElementById('count');
    if (countElement) {
        countElement.textContent = count.toString();
    } else {
        console.log('Count element not found');
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the count from storage and update the popup UI
    chrome.storage.local.get('count', function (result) {
        const count = result.count || 0;
        updateCount(count);
    });
});
