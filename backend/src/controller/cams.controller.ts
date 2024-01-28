import { Request, Response } from "express";
import Cams from "../models/cams.model";

export default class CamsController {
    async findall(req: Request, res: Response) {
        try {
            const camsData = await Cams.findAll();
      
            res.status(200).send(camsData);
          } catch (err) {
            res.status(500).send({
              message: "Some error occurred while retrieving tutorials."
            });
          }
    }
}