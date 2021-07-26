import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"

function _drawImage() {
  const image = ProxyState.activeImage
  console.log('image from drawImage:' + image)
  let template = `                    <div
  style="background-image: url('${image}'); background-size: cover"
  class="col">
  <h1 id="time" class="text-center p-5 clock">TIME</h1>
</div>`
  document.getElementById('image').innerHTML = template
}

function _getTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // m = _checkTime(m);
  if (h > 12) {
    h -= 12
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

