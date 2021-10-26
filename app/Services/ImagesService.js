import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class ImagesService {
  async getNewImage() {
    try {

      const res = await sandbox.get('images')
      // console.log('image data', res.data)
      ProxyState.activeImage = res.data
      // ProxyState.activeImageAuthor = res.data.author
      console.log('active Image', ProxyState.activeImage)
      // console.log('active Image', ProxyState.activeImageAuthor)
    } catch {
      console.log('problem with getNewImage in ImagesService')
    }
  }

}

export const imagesService = new ImagesService();