// this file is creating a custom error class 
class ApiError extends Error {
/**
 * Represents a custom error object.
 * @constructor
 * @param {number} statusCode - The status code of the error.
 * @param {string} [message="something went wrong"] - The error message.
 * @param {Array} [errors=[]] - An array of additional error details.
 * @param {string} [stack=""] - The stack trace of the error.
 */
constructor(statusCode, message="something went wrong", errors =[], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
        this.stack = stack;
    } else {
        Error.captureStackTrace(this, this.constructor);
    }
}
}

export {ApiError}