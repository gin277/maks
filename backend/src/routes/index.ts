import { Application } from "express";
import camsRoutes from "./cams.routes";
import smartHouse from "./smarthouse.routes"

export default class Routes {
  constructor(app: Application) {
    app.use("/api/cams", camsRoutes);
    app.use("/api/smarhouse", smartHouse)
  }
}