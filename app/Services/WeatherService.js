import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js"
import { sandbox } from "./AxiosService.js";



class WeatherService {

  toggle(id) {
    let found = ProxyState.activeWeather
    found.clicked = !found.clicked
    ProxyState.activeWeather = ProxyState.activeWeather
  }
  async getWeather() {
    const res = await sandbox.get('weather')
    // console.log(res.data)
    ProxyState.activeWeather = new Weather(res.data)
    // console.log('Consoling the active Weather', ProxyState.activeWeather)
  }

}


export const weatherService = new WeatherService();