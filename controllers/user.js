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
        return res.status(201).json({
            msg: "Created user",
            id: createdUser._id.toString()
        })
    } catch (error) {
        console.log("Create user error", error);
    }
}

const handleGetAllUsers = async (req, res) => {
    const allUsers = await User.find();
    return res.status(200).json({
        users: allUsers
    })
}

const handleUpdateUser = async(req, res) => {
    const userId = req.params.id;
    const {name, email} = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, {
        name,
        email
    })
    if(!updatedUser){
        return res.status(400).json({
            msg: "There is no user found"
        })
    }

    return res.status(200).json({
        msg: "Updated successfully",
        updatedUser
    })
}

const handleDeleteUser = async(req, res) => {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);
    if(!user){
        return res.status(400).json({
            msg: "There is no user found"
        })
    }

    return res.status(200).json({
        msg: "Deleted successfully"
    })
}

module.exports = {
    handleCreateUser,
    handleGetAllUsers,
    handleUpdateUser,
    handleDeleteUser
}