console.log("Content script starting - Hidden Average")

const ID = "56$517193"

function hideAverage() {
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL("hide.css");
    link.id = "hiddenAverageStyle"
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link)
}

chrome.storage.sync.get(["hideAverage"]).then((val) => {
    if (val["hideAverage"]) {
        hideAverage()
    }
})

chrome.storage.sync.onChanged.addListener((change) => {
    const prev: boolean= change["hideAverage"].oldValue;
    const curr: boolean = change["hideAverage"].newValue;
    if (prev && !curr) {
        // hidden -> visible
        // delete link element
        document.getElementById("hiddenAverageStyle")?.remove()

    } else if (!prev && curr) {
        // visible -> hidden
        hideAverage()
    }
})