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

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'waterReminder') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['reminder.js']
                });
            }
        });
    }
});
