chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get('interval', (data) => {
        const mins = parseInt(data.interval || 60)
        chrome.alarms.create('drinkWater', { periodInMinutes: mins })
    })
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action = "updateAlarm") {
        chrome.alarms.clear("waterReminder", () => {
            chrome.alarms.create("waterReminder", { periodInMinutes: msg.interval })
        })
    }
})