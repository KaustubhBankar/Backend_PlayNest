// Higher order function for async Handler using tryCatch Block
// const asyncHandler = (func) => async(req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }



// request Handler fun using Promise method 
const asyncHandler = (requestHandler) =>{
    return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}