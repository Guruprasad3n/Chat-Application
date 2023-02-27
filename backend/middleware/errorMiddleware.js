const notFound = (req, res, next)=>{
    const errpr = new Error(`Not Found- ${req.originalUrl}`)
    res.status(404);
    next(error)
}
const errorHandler =(req, err, res, next)=>{
const statusCode = res.statusCode === 200?500:res.statusCode;
res.status(statusCode);
res.json({
    message:err.message,
    stack:process.env.NODE_ENV === 'production'? null :err.stack
}) 
}


module.exports = {notFound, errorHandler}