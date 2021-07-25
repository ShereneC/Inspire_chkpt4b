export default class Weather {
  constructor(data) {
    this.id = data.weather[0].id;
    this.conditions = data.weather[0].main;
    this.tempK = data.main.temp;
    this.tempC = Math.floor(data.main.temp - 273.15);
    this.tempF = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32);
    this.clicked = data.clicked || false
  }

  get TemplateFahr() {
    return `
    <h3 onclick="app.weatherController.toggle('${this.id}')" ${this.clicked ? "clicked" : ''}>Today's Weather:</h3>
    <h4 class ="fahr">${this.tempF}°F</h4>
    
    `
  }

  get TemplateCel() {
    return `
    <h3 onclick="app.weatherController.toggle('${this.id}')" ${this.clicked ? "clicked" : ''}>Today's Weather:</h3>
    <h4 class ="celsius">${this.tempC}°C</h4>
    `
  }
}