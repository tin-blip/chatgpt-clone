import 'dotenv/config';

import express from "express";
import db from "./db/db.config.js";
import cors from "cors";
import {errorHandlerMiddleware} from "./src/middleware/error-handler.js";
import mainRouter from "./src/api/main.routes.js";



const app = express();

// Allow requests from your frontend port
app.use(
    cors({
        origin: 'http://localhost:5173',
    }),
);

app.use(express.json());
app.use('/api', mainRouter);

//final middleware for error handling
app.use(errorHandlerMiddleware);

async function startServer() {
    try {
        const connection = await db.getConnection();
        connection.release();
        

        app.listen(3888, err => {
            if (err) {
                throw err;
            }
            console.log("Server is running on port http://localhost:3888");
        });
    } catch (error) {
        console.error("Error starting server:", error.message);
    }
}


startServer();






