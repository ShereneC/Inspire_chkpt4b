import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"

function _drawImage() {
  const image = ProxyState.activeImage
  console.log('image from drawImage:' + image)
  let template = `                    <div
  style="background-image: url('${image}'); background-size: cover"
  class="col w-100 h-90">
  <h3 id="time" class="text-light p-5">TIME</h3>
</div>`
  document.getElementById('image').innerHTML = template
}

function _getTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // m = _checkTime(m);
  document.getElementById('time').innerHTML = h + ':' + m;
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

