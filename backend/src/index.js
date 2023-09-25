import appFactory from "./presentation/factories/appFactory.js";
import dotenv from "dotenv";

dotenv.config();


const app = appFactory.create(process.env.APPLICATION)
    app.init()
    app.listen()