const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    redirectUrl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String
    },
    visitHistory: {
        type: [
            {
                timeStamps: String
            }
        ]
    }
})

module.exports = mongoose.model("Url", urlSchema);