import jwt from 'jsonwebtoken';

const tokenCheck = (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(500).json({message:"Token is missing"})
    }
    try {
        const decode = jwt.verify(token,process.env.Token_KEY)
        const {id} = decode;
        req.id = id;
        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export {tokenCheck}