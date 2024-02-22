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

const handleRedirectUrl = async (req, res) => {
    // find the id in db and redirect to the redirect url
    const {id} = req.params;
    const url = await URL.findOne({
        shortId: id
    })
    if(!url){
        return res.status(400).json({
            msg: "There is no url found"
        })
    }
    return res.status(300).redirect(url.redirectUrl);
}

module.exports = {
    handleCreateShortUrl,
    handleRedirectUrl
}