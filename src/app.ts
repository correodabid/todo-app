import express from "express";
import morgan from "morgan";
import { Controller } from "./interfaces";
import config from "./config/environment";
import seedDB from "./config/seeds/seed";

class App {
  public app: express.Application;
  public port = config.port;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.seedDatabase();
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`App listening on port ${config.port} in ${config.env} mode`)
    );
  }

  private initializeMiddleware() {
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => this.app.use("/", controller.router));
  }

  private seedDatabase() {
    if (config.env === "development" && config.seedDB === true) seedDB();
  }
}

export default App;
