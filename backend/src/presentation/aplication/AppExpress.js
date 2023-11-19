import express from 'express';
import dotenv from 'dotenv';
import apiRouter from '../routes/index.js';
import cors from 'cors';

dotenv.config();

class AppExpress {
    init () {
        this.app = express();
        
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    build() {
        this.app.use('/', apiRouter );
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