document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['interval', 'mode'], (data) => {
        document.getElementById('interval').value = data.interval || 60
        document.getElementById('mode').value = data.mode || 'video'
    })
})