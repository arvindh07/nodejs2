const jwt = require("jsonwebtoken");

const createToken = (email, role, id) => {
    return jwt.sign({email, role, id}, process.env.JWT_SECRET);
}

const verifyToken = (req, res, next) => {
    try {
        const user = jwt.verify(req?.cookies?.token, process.env.JWT_SECRET);
        if(user){
            req.user = user;
            return next();
        }else{
            return res.redirect("/login");
        }
    } catch (error) {
        return res.redirect("/login");
    }
}

module.exports = {
    createToken,
    verifyToken
}