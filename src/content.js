// injectScript('https://adrianotiger.github.io/web-esheep/src/esheep.js');

(function() {
    chrome.runtime.onMessage.addListener(receivefunc);
    function receivefunc(msg,sender,sendResponse){
        if(msg.txt === "toasty") {
            displayToasty();
        }
    }

    function displayToasty() {
      $("body").toasty();
      $("body").toasty('pop');
    }
}());
