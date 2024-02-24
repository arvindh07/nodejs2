// const restrictTo = (roles) => {
    // check for token
    // if no token return to login
    // else check for roles
    // if user role is allowed, thn call next()
    // else route to unauthorized
// }
const checkForRoles = (roles, req) => {
    if(roles.includes(req.user.role)){
        return true;
    }
    return false;
}

const restrictTo = (roles) => {
    return function(req, res, next){
        if(!req.cookies?.token){
            return res.status(400).json({
                msg: "No token"
            })
        }
        const allowed = checkForRoles(roles, req);
        if(allowed){
            return next();
        }
        return res.end("<h1>Unauthorized</h1>");
    }
}

module.exports = {
    restrictTo
}