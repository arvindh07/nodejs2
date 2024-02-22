const mongoose = require("mongoose");

const connectToDb = () => {
    try {
        return mongoose.connect("mongodb://127.0.0.1:27017/users24");
    } catch (error) {
        console.log("db err", error);
    }
}

module.exports = {connectToDb}