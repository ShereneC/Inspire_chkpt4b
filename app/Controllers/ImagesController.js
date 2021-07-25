import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"

function _drawImage() {
  const image = ProxyState.activeImage
  console.log('image from drawImage:' + image)
  let template = `<img class="w-100" src='${image}' alt="nice image" ></img>`
  document.getElementById('image').innerHTML = template
}
export default class ImagesController {
  constructor() {
    ProxyState.on('activeImage', _drawImage)
    this.getNewImage()
  }

  async getNewImage() {
    try {
      await imagesService.getNewImage()
    } catch {
      console.log('could not get new image from controller')
    }
  }
}

