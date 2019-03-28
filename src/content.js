// injectScript('https://adrianotiger.github.io/web-esheep/src/esheep.js');

(function() {
    chrome.runtime.onMessage.addListener(receivefunc);
    function receivefunc(msg,sender,sendResponse){
        if(msg.txt === "toasty") {
            displayToasty();
        }
    }

    function displayToasty() {
      //Add to dom needed elements
      document.body.innerHTML += '<div id="toasty-guy-dan"><img src="'+ chrome.extension.getURL('toasty.png') +'" alt="toasty"></div>';
      document.body.innerHTML += '<audio id="toasty-audio"><source src="'+ chrome.extension.getURL('toasty.mp3') +'" type="audio/mpeg"></source></audio>';

      var toastyGuy = document.getElementById('toasty-guy-dan');
      var toastyAudio = document.getElementById('toasty-audio');
      toastyAudio.play();

      toastyGuy.classList.add("show-dan");
      setTimeout(function(){ 
        toastyGuy.classList.remove("show-dan"); 
      }, 1000);
    }
}());
