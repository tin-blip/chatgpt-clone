// import {StatusCodes} from 'http-status-codes';

export const errorHandlerMiddleware = (err, req, res, next) => {
    console.error('Error in request:', err.message);
    return res.status(err.status || 500).json({
        status: false,
        messsage: err.message || "Something went wrong, please try again later",
    });
};