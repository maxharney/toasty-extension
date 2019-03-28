// injectScript('https://adrianotiger.github.io/web-esheep/src/esheep.js');

(function () {

  var toastyGuyElement = document.getElementById('toasty-guy-dan');
  var toastyAudioElement = document.getElementById('toasty-audio');

  if (!toastyGuyElement) {
    document.body.innerHTML += '<div id="toasty-guy-dan"><img src="' + chrome.extension.getURL('images/toasty.png') + '" alt="toasty"></div>';
    toastyGuyElement = document.getElementById('toasty-guy-dan');
  }

  if (!toastyAudioElement) {
    document.body.innerHTML += '<audio id="toasty-audio"><source src="' + chrome.extension.getURL('sounds/toasty.mp3') + '" type="audio/mpeg"></source></audio>';
    toastyAudioElement = document.getElementById('toasty-audio');
  }

  toastyAudioElement.play();
  toastyGuyElement.classList.add("show-dan");
  setTimeout(function () {
    toastyGuyElement.classList.remove("show-dan");
  }, 1000);
}());
