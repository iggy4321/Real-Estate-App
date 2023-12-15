import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
import exp from 'constants';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
});

const app = express();

app.use(express.json()); // Body parser for JSON payloads

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);



app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });

});





app.use(express.json());


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

// General error handler (optional, can be more sophisticated)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
