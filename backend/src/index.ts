import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { Database } from "./db";
import Routes from "./routes";
import Cams from "./models/cams.model";
import SmarHouse from "./models/smarHouse.model";

export class Server {
    constructor(app: Application) {
        this.config(app);
        this.syncDatabase();
        this.initialCamsData()
        new Routes(app);
    }

    private config(app: Application): void {
        app.use(cors())
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }

    private syncDatabase(): void {
        const db = new Database();
        db.sequelize?.sync({ force: false });
    }

    private initialCamsData = () => {
        Cams.create({
            img: "https://i.imgur.com/Hle5V6Y.png",
            title: "C6N 4MP",
            description: "Охват каждого угла с разрешением 2K.",
        });
        Cams.create({
            img: "https://i.imgur.com/sG2Xzpa.png",
            title: " C1T",
            description: "Умная камера для дома",
        });
        Cams.create({
            img: "https://i.imgur.com/S6JWnv9.png",
            title: "C1C-B",
            description: "Обеспечьте полноценную защиту дома."
        });
    }

    private initialSmarHouseData = () => {
        Cams.create({
            img: "https://i.imgur.com/dyYEK8C.png",
            title: "LC3",
            description: "Умная настенная камера видеонаблюдения с прожекторами",
        });
        Cams.create({
            img: "https://i.imgur.com/nuv3kN4.png",
            title: "UV-C Air Purifier",
            description: "Дышите чистым и здоровым воздухом!",
        });
        Cams.create({
            img: "https://i.imgur.com/KxQdnue.png",
            title: "T31",
            description: "Включайте и отключайте устройства на любом расстоянии"
        });
    }
}

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = 4000;

app
    .listen(PORT, "localhost", function () {
        console.log(`Server is running on port ${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });