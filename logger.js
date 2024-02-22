const fs = require("fs");

const logger = (logText) => {
    fs.appendFile("log.txt", logText, (err) => {
        if(err){
            console.log("log err -> ", err);
        }
    });
}

module.exports = logger;