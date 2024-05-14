/**
 * Wraps an asynchronous request handler function with error handling.
 * @param {function} requestHandler - The asynchronous request handler function.
 * @returns {function} - The wrapped request handler function.
 */
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

export {asyncHandler}

// const asyncHandler = (fn) => {async (req,res,next)=>{
//     try {
//         await fn(res, req, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message:error.message
//         })
//     }
// }};