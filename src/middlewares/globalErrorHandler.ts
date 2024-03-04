import { ErrorRequestHandler } from 'express';
import config from '../config';
import { IGenericErrorMessage } from '../interfaces/error';
import ApiError from '../errors/api.errors';
import HandleValidationError from '../errors/handelValidationError';
import handleCastError from '../errors/handelCastError';

// ErrorHandler.js
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode: number | string = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  // console.log(error)

  if (error.name)
    if (error.name === 'ValidationError') {
      console.log(1);
      const simplifiedError = HandleValidationError(error);
      statusCode = simplifiedError?.statusCode;
      message = simplifiedError?.message || 'Validation Error';
      errorMessages = simplifiedError?.errorMessages || [];
    } else if (error.name === 'CastError') {
      const simplifiedError = handleCastError(error);
      statusCode = simplifiedError?.statusCode;
      message = simplifiedError?.message || 'Cast Error';
      errorMessages = simplifiedError?.errorMessages;
    } else if (error instanceof ApiError) {
      statusCode = error.statusCode | 500;
      message = error.message || 'Internal Server Error';
      errorMessages = error.message
        ? [
            {
              path: '',
              message: error.message,
            },
          ]
        : [];
    } else if (error instanceof Error) {
      message = error?.message;
      errorMessages = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : [];
    }
  const stack = config?.node_env === 'development' ? error.stack : null;
  res.json({
    success: false,
    status: statusCode,
    message: message,
    errorMessages,
    stack,
  });
};

export default ErrorHandler;
