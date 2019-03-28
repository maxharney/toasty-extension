// injectScript('https://adrianotiger.github.io/web-esheep/src/esheep.js');

(function () {

  var toastyGuyElement, toastyAudioElement;

  window.onload = function () {
    document.body.innerHTML += '<div id="toasty-guy-dan"><img src="' + chrome.extension.getURL('toasty.png') + '" alt="toasty"></div>';
    document.body.innerHTML += '<audio id="toasty-audio"><source src="' + chrome.extension.getURL('toasty.mp3') + '" type="audio/mpeg"></source></audio>';

    toastyGuyElement = document.getElementById('toasty-guy-dan');
    toastyAudioElement = document.getElementById('toasty-audio');
  }

  chrome.runtime.onMessage.addListener(receivefunc);
  function receivefunc(msg, sender, sendResponse) {
    if (msg.txt === "toasty") {
      displayToasty();
    }
  }

  function displayToasty() {
    if (!toastyGuyElement || !toastyAudioElement) {
      return;
    }

    toastyAudioElement.play();

    toastyGuyElement.classList.add("show-dan");
    setTimeout(function () {
      toastyGuyElement.classList.remove("show-dan");
    }, 1000);
  }
}());
