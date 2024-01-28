import { Request, Response } from "express";
import SmartHouse from "../models/smarHouse.model";

export default class SmartHouseController {
    async findall(req: Request, res: Response) {
        try {
            const smarHouseData = await SmartHouse.findAll();
      
            res.status(200).send(smarHouseData);
          } catch (err) {
            res.status(500).send({
              message: "Some error occurred while retrieving tutorials."
            });
          }
    }
}