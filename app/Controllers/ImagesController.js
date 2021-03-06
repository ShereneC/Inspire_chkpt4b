import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"

function _drawImage() {
  const image = ProxyState.activeImage.largeImgUrl;
  const author = ProxyState.activeImage.author;
  let template = /*html*/`
  <style>
    body {
      background-image: url('${image}');
      background-size: cover;
      background-position: center;
    }
    </style>  
    `
    document.getElementById('image').outerHTML = template
  let authorTemplate = /*html*/`
  <p class="fontshadow text-light">Image by ${author}
  `
  document.getElementById('author').innerHTML = authorTemplate
  let clockTemplate = /*html*/`
  <h1 id="time" class="text-center p-2 clock fontshadow time">TIME</h1>
  <hr class="fontshadow">
  <h4 id="message" class="text-center fontshadow text-light" >Welcome, Weary Traveler</h4>`
  document.getElementById('clock').innerHTML = clockTemplate
}

function _getTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // m = _checkTime(m);
  let messageMorning = /*html*/ `
  <h4>Good Morning, Traveler</h4>
  `
  let messageAfternoon = /*html*/ `
  <h4>Good Afternoon, Traveler</h4>
  `
  let messageEvening = /*html*/ `
  <h4>Good Evening, Traveler</h4>
  `
  if (h == 0) {
    h += 12
    document.getElementById('message').innerHTML = messageMorning
  } else if (h < 12) {
    document.getElementById('message').innerHTML = messageMorning
  } else if (h == 12) {
    document.getElementById('message').innerHTML = messageAfternoon
  } else if (h >= 12 && h < 17) {
    h -= 12
    document.getElementById('message').innerHTML = messageAfternoon
  } else if (h >= 17) {
    h-=12
    document.getElementById('message').innerHTML = messageEvening
  }
  if (m < 10) {
    document.getElementById('time').innerHTML = h + ':0' + m;
  } else {
    document.getElementById('time').innerHTML = h + ':' + m;
  }
  setTimeout(_getTime, 1000);
}

// function _checkTime(i)
export default class ImagesController {
  constructor() {
    // ProxyState.on('activeImageAuthor', _drawImage)
    ProxyState.on('activeImage', _drawImage)
    ProxyState.on('activeImage', _getTime)
    this.getNewImage()
  }

  async getNewImage() {
    try {
      await imagesService.getNewImage()
    } catch {
      console.log('could not get new image from controller')
    }
  }

  getTime() {

  }
}

