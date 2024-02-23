const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    redirectUrl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{
        timeStamps: {
            type: Number
        }
    }]
})

module.exports = mongoose.model("Url", urlSchema);