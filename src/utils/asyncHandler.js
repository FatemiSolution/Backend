// this code snippet provides a convenient way to handle errors in asynchronous request handlers by wrapping them in a middleware function that catches any errors and passes them to the error handling middleware.
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