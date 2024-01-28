import { Router } from "express";
import CamsController from "../controller/cams.controller";

class CamsRoutes {
  router = Router();
  controller = new CamsController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.get("/", this.controller.findall);
  }
}

export default new CamsRoutes().router;