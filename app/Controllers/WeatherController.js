import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _draw() {
  document.getElementById('weather').innerHTML = ProxyState.activeWeather.Template
}
export default class WeatherController {
  constructor() {
    this.getWeather()
    ProxyState.on('activeWeather', _draw)
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }
}
