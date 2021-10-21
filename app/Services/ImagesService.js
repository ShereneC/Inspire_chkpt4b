import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class ImagesService {
  async getNewImage() {
    try {

      const res = await sandbox.get('images')
      console.log('image data', res.data)
      ProxyState.activeImage = res.data.imgUrl
      console.log(ProxyState.activeImage)
    } catch {
      console.log('problem with getNewImage in ImagesService')
    }
  }

}

export const imagesService = new ImagesService();