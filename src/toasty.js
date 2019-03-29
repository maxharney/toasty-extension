// injectScript('https://adrianotiger.github.io/web-esheep/src/esheep.js');

(function () {
  var toastyGuyElement = getToastyGuy();
  var toastyAudioElement = getToastyAudio();

  toastyGuyElement.classList.add("show-dan");
  toastyAudioElement.play();

  setTimeout(function () {
    toastyGuyElement.classList.remove("show-dan");
  }, 1000);

  /**
   * Retrieve the existing 'toasty' image or create a new one and append to the document body
   */
  function getToastyGuy() {
    var toastyGuyId = 'toasty-guy-dan';
    var toastyGuyElement = document.getElementById(toastyGuyId);

    if (toastyGuyElement) {
      return toastyGuyElement;
    }

    toastyGuyElement = createElement('div', { id: toastyGuyId });
    toastyGuyImage = createElement('img', { src: chrome.extension.getURL('images/toasty.png') });

    toastyGuyElement.appendChild(toastyGuyImage);
    document.body.appendChild(toastyGuyElement);

    return toastyGuyElement;
  }

  /**
   * Retrieve the existing 'toasty' audio or create a new one and append to the document body
   */
  function getToastyAudio() {
    var toastyAudioId = 'toasty-audio';
    var toastyAudioElement = document.getElementById(toastyAudioId);

    if (toastyAudioElement) {
      return toastyAudioElement;   
    }
    
    toastyAudioElement = createElement('audio', { id: toastyAudioId });
    toastyAudioSource = createElement('source', { 
      src: chrome.extension.getURL('sounds/toasty.mp3'),
      type: 'audio/mpeg'
    });

    toastyAudioElement.appendChild(toastyAudioSource);
    document.body.appendChild(toastyAudioElement);

    return toastyAudioElement;
  }

  function createElement(elementType, options) {
    var element = document.createElement(elementType);

    if (options && options.id) {
      element.setAttribute('id', options.id);
    }

    if (options && options.src) {
      element.setAttribute('src', options.src);
    }

    if (options && options.type) {
      element.setAttribute('type', options.type);
    }

    return element;
  }
}());
