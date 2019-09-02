chrome.browserAction.onClicked.addListener(showIFrame);
function showIFrame() {
  chrome.tabs.executeScript(null, { 
    file: "dig.js", 
  });
}

chrome.contextMenus.create({
  title: 'Dig this!',
  onclick: function() {
    chrome.tabs.executeScript(null, {
      file: "dig.js",
    });
  },
})
chrome.contextMenus.create({
  title: 'Open as a playlist',
  onclick: function() {
    chrome.tabs.executeScript(null, {
      file: "curated.js",
    });
  },
})