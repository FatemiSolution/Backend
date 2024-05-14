// this file is creating a custom ApiResponse 
class ApiResponse{
/**
 * Represents a constructor for creating a response object.
 * @constructor
 * @param {number} statusCode - The status code of the response.
 * @param {any} data - The data to be included in the response.
 * @param {string} [message="Success"] - The message associated with the response.
 */
constructor(statusCode, data, message = "Success"){
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
}
}