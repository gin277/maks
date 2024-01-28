import { Router } from "express";
import SmartHouseController from "../controller/smartHouse.controller";

class SmartHouseRoutes {
  router = Router();
  controller = new SmartHouseController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.get("/", this.controller.findall);
  }
}

export default new SmartHouseRoutes().router;