import dbFactory from "./data/factories/dbFactory.js";
import appFactory from "./presentation/factories/appFactory.js";
import dotenv from "dotenv";

dotenv.config();

void (async () => {
    const db = dbFactory.create(process.env.MONGOOSE);
    db.connect(process.env.MONGOOSE_URI);
    
    const app = appFactory.create(process.env.APPLICATION);
    app.init();
    app.build();
    app.listen();
}) 

()