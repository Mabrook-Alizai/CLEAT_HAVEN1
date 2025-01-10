import jwt from 'jsonwebtoken';

// this will decode user ID
const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success: false, message: "Not Authorized Login Again"});
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export default authMiddleware;