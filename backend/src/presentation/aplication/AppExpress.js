import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import apiRouter from '../routes/index.js';
import cors from 'cors';

dotenv.config();

class AppExpress {
    init () {
        this.app = express();
        
        const corsOptions = {
            origin: 'http://localhost:5173',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
            optionsSuccessStatus: 204,
        };

        this.app.use(cors(corsOptions));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(session({
            secret: process.env.PRIVATE_KEY,
            resave: false,
            saveUninitialized: false,
        }))
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