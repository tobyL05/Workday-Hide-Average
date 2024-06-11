console.log("Content script starting - Hidden Average");
chrome.storage.sync.get(["hideAverage"]).then((val) => {
  if (val["hideAverage"]) {
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL("hide.css");
    link.id = "hiddenAverageStyle";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
});
chrome.storage.sync.onChanged.addListener((change) => {
  const prev = change["hideAverage"].oldValue;
  const curr = change["hideAverage"].newValue;
  if (prev && !curr) {
    document.getElementById("hiddenAverageStyle")?.remove();
  } else if (!prev && curr) {
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL("hide.css");
    link.id = "hiddenAverageStyle";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
});
