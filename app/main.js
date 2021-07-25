import QuotesController from "./Controllers/QuotesController.js";
import TasksController from "./Controllers/TasksController.js";
import WeatherController from "./Controllers/WeatherController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {
  tasksController = new TasksController();
  quotesController = new QuotesController();

  weatherController = new WeatherController();
  imagesController = new ImagesController();
}

window["app"] = new App();
