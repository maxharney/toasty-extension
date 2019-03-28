chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.insertCSS(
        tab.id,
        {
            file: 'toasty.css'
        },
        function () {
            tab.cssInserted = true;
            chrome.tabs.executeScript(tab.id, {
                file: 'toasty.js'
            });
        }
    );
});
