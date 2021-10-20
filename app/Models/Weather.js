export default class Weather {
  constructor(data) {
    this.id = data.weather[0].id;
    this.conditions = data.weather[0].main;
    this.icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
    this.tempK = data.main.temp;
    this.tempC = Math.floor(data.main.temp - 273.15);
    this.tempF = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32);
    this.clicked = data.clicked || false
  }

  get TemplateFahr() {
    return `
    <h3 class="fontshadow text-light" onclick="app.weatherController.toggle('${this.id}')" ${this.clicked ? "clicked" : ''}>Today's Weather:</h3>
    <h4 class="fahr fontshadow text-light">${this.tempF}°F
    <img class="wicon" src="${this.icon}" alt="${this.conditions}"></h4>
    
    `
  }

  get TemplateCel() {
    return `
    <h3 class="fontshadow text-light" onclick="app.weatherController.toggle('${this.id}')" ${this.clicked ? "clicked" : ''}>Today's Weather:</h3>
    <h5 class ="celsius fontshadow text-light">${this.tempC}°C<span class="fontshadow text-light"> and ${this.conditions}</span</h5>
    `
  }
}