import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"

function _drawImage() {
  const image = ProxyState.activeImage
  console.log('image from drawImage:' + image)
  let template = `                    <div
  style="background-image: url('${image}'); background-size: cover"
  class="col w-100 vh-50">
  <h3 class="text-light p-5">TIME</h3>
</div>`
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

