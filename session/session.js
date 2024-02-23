const session = new Map();
const setSessionId = (userId, sessionId) => {
    session.set("sessionId", sessionId);
    console.log("server session inside", session);
}
const getSessionId = () => {
    return session.get("sessionId");
}

module.exports = {
    setSessionId,
    getSessionId,
    session
}