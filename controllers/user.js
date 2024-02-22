const User = require("../models/user");

const handleCreateUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        if (!name || !email) {
            // bad request
            return res.status(400).json({
                msg: "All fields are required"
            })
        }
        const createdUser = await User.create({
            name,
            email
        })
        return res.status(200).json({
            msg: "Created user",
            id: createdUser._id.toString()
        })
    } catch (error) {
        console.log("Create user error", error);
    }
}

module.exports = {
    handleCreateUser
}