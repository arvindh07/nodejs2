const { getSessionId } = require("../session/session");

const checkUserAuth = (req, res, next) => {
    const {sessionId} = req.cookies;
    const localSessionId = getSessionId();
    if(sessionId === localSessionId){
        return next();
    }
    return res.redirect("/login");
}

module.exports = checkUserAuth;