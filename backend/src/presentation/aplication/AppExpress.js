import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

class AppExpress {
    init () {
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    listen(){
        this.app.listen(process.env.NODE_PORT, () => { console.log(`Server running on port ${process.env.NODE_PORT}`)});
    }
}

export default AppExpress;