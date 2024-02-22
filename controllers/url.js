const URL = require("../models/url");
const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 7 });

const handleCreateShortUrl = async (req, res) => {
    const {redirectUrl} = req.body;
    if(!redirectUrl){
        return res.status(400).json({
            "error": "redirect url required"
        })
    }

    const shortId = randomUUID();
    const shortUrl = await URL.create({
        redirectUrl,
        shortId,
    })
    
    return res.status(200).json({
        msg: "success"
    })
}

module.exports = {
    handleCreateShortUrl
}