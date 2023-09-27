import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/index.js';

dotenv.config();

class AppExpress {
    init () {
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    build() {
        this.app.use('/', router);
        }
    
    close() {
        this.app.close();
    }

    listen() {
        this.server = this.app.listen(process.env.NODE_PORT, () => { console.log(`Server running on port ${process.env.NODE_PORT}`) 
    })
}
}

export default AppExpress;