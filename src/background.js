chrome.browserAction.onClicked.addListener(function(tab) {
    msg={txt: 'toasty'};
    chrome.tabs.sendMessage(tab.id, msg);
});
