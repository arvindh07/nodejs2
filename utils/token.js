const jwt = require("jsonwebtoken");

const createToken = (email, id) => {
    return jwt.sign({email, id}, process.env.JWT_SECRET);
}

const verifyToken = (req, res, next) => {
    try {
        const result = jwt.verify(req?.cookies?.token, process.env.JWT_SECRET);
        console.log("res ", result);
        if(result){
            res.locals.id = result.id;
            console.log("setting", res.locals);
            return next();
        }
        return res.redirect("/login");
    } catch (error) {
        return res.redirect("/login");
    }
}

module.exports = {
    createToken,
    verifyToken
}