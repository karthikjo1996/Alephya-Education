const notFound = (req,res,next) =>{
    const error = new Error(`not Found - ${req.originalurl}`);
    res.status(404);
    next(error);
};

const errorHandler =(err,req,res,next) =>{
    let stausCode = res.stausCode === 200 ? 500 :res.stausCode;
    let message = err.message

    res.status(stausCode).json({
        message,
        stack:process.env.NODE_ENV === "production" ? null : err.stack
    })
};

export {notFound,errorHandler}