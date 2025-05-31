chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get('interval', (data) => {
        const mins = parseInt(data.interval || 60)
        chrome.alarms.create('drinkWater', { periodInMinutes: mins })
    })
})