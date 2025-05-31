document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['interval', 'mode'], (data) => {
        document.getElementById('interval').value = data.interval || 60
        document.getElementById('mode').value = data.mode || 'video'
    })

    document.getElementById("save").addEventListener("click", () => {
        const interval = document.getElementById('interval').value
        const mode = document.getElementById('mode').value

        chrome.storage.sync.set({ interval, mode }, () => {
            chrome.runtime.sendMessage({ action: "updateAlarm", interval: parseInt(interval) });
            document.getElementById('status').innerText = '✅ Settings saved!';
        })
    })
})