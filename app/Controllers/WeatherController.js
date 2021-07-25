import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _draw() {
  let found = ProxyState.activeWeather
  let template = ''
  if (found.clicked) {
    document.getElementById('weather').innerHTML = ProxyState.activeWeather.TemplateFahr
  } else {
    document.getElementById('weather').innerHTML = ProxyState.activeWeather.TemplateCel
  }
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

  async toggle() {
    await weatherService.toggle()
  }
}
