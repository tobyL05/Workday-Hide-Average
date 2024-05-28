
console.log("Hidden Average Background Script")

function setBadge(hidden: boolean) {
    if (hidden) {
        chrome.action.setBadgeText({
            text: "ON"
        })
        chrome.action.setBadgeBackgroundColor({
            color: "green"
        })
    } else {
        chrome.action.setBadgeText({
            text: "OFF"
        })
        chrome.action.setBadgeBackgroundColor({
            color: "red"
        })
    }
}


// On install, set value in storage and setBadgeText
chrome.runtime.onInstalled.addListener(() => {
    console.log("Hidden-Average installed!");
    chrome.storage.sync.set({"hideAverage" : false});
    chrome.action.setBadgeText({
        text: "OFF"
    })
    chrome.action.setBadgeBackgroundColor({
        color: "red"
    })
})

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.sync.get(["hideAverage"]).then((val) => {
        setBadge(val["hideAverage"])
    })
})

chrome.runtime.onMessage.addListener((msg) => {
    chrome.storage.sync.get(["hideAverage"]).then((val) => {
        const hidden = val["hideAverage"]
        if (hidden)  {
            chrome.storage.sync.set({"hideAverage" : false})
            chrome.action.setBadgeBackgroundColor({
                color: "red"
            })
            chrome.action.setBadgeText({
                text:"OFF"
            })
        } else {
            chrome.storage.sync.set({"hideAverage": true})
            chrome.action.setBadgeBackgroundColor({
                color: "green"
            })
            chrome.action.setBadgeText({
                text:"ON"
            })
        }
    })
})

export {}