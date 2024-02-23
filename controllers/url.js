const URL = require("../models/url");
const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 7 });

const handleCreateShortUrl = async (req, res) => {
    const {redirectUrl} = req.body;
    console.log("iunside", redirectUrl);
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
    // whenever user to accessing the shorturl, we need to store their timestamps
    url.visitHistory.timeStamps = Date.now();
    await url.save();
    return res.status(300).redirect(url.redirectUrl);
}

const handleGetAllUrls = async (req, res) => {
    const urls = await URL.find();
    return res.status(200).json({
        status: "Ok",
        urls
    })
}

const handleDeleteUrl = async(req, res) => {
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            "error": "ID required"
        })
    }
    await URL.findOneAndDelete({ shortId: id});
    return res.status(200).json({
        msg: "Successfully deleted"
    })
}

module.exports = {
    handleCreateShortUrl,
    handleRedirectUrl,
    handleGetAllUrls,
    handleDeleteUrl
}