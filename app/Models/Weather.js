export default class Weather {
  constructor(data) {
    this.id = data.weather[0].id;
    this.conditions = data.weather[0].main;
    this.icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
    this.tempK = data.main.temp;
    this.tempC = Math.floor(data.main.temp - 273.15);
    this.tempF = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32);
    this.location = data.name;
    this.description = data.weather[0].main;
    this.clicked = data.clicked || true
  }

  get TemplateFahr() {
    return `
    <h5 class="fontshadow text-light m-0 p-0 hoverable" onclick="app.weatherController.toggle('${this.id}')" ${this.clicked ? "clicked" : ''}>${this.location} Weather:</h5>
    <div class="d-flex flex-column align-items-right"><h4 class="fahr fontshadow text-light m-0 p-0">${this.tempF}°F<span><img class="wicon m-0 p-0" src="${this.icon}" alt="${this.conditions}"></span>${this.description}
    </h4>
    `
  }

  get TemplateCel() {
    return `
    <h5 class="fontshadow text-light m-0 p-0 hoverable" onclick="app.weatherController.toggle('${this.id}')" ${this.clicked ? "clicked" : ''}>${this.location} Weather:</h5>
    <div class="d-flex flex-column align-items-right"><h4 class="fahr fontshadow text-light m-0 p-0">${this.tempC}°C<span><img class="wicon m-0 p-0" src="${this.icon}" alt="${this.conditions}"></span>${this.description}
    </h4>
    `
  }
}