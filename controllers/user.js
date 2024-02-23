const bcrypt = require("bcrypt");
const User = require("../models/user");

const handleCreateUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            // bad request
            return res.status(400).json({
                msg: "All fields are required"
            })
        }
        const hashed_password = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashed_password
        })
        return res.render("Homepage");
    } catch (error) {
        console.log("Create user error", error);
    }
}

const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        if (!email || !password) {
            // bad request
            return res.status(400).json({
                msg: "All fields are required"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                msg: "No user found"
            })
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword){
            return res.status(400).json({
                msg: "Password didnt match"
            })
        }
        return res.render("Homepage");
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
    handleDeleteUser,
    handleLogin
}