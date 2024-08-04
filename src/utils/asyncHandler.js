const asyncHandler=(requestHandler)=>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch(err=> next(err));
    }
};

export default async


//const asyncHandler=()=>{};
//const asyncHandler=(fn)=>()=>{};
//const asyncHandler=(fn)=>{()=>{}};
//const asyncHandler=(fn)=>async()=>{};

//this is a higher order function which accepts a argument as a function
// const asyncHandler=(fn)=>async(req, res, next)=>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// };