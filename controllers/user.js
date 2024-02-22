const handleCreateUser = (req, res) => {
    return res.status(200).json({
        msg: "Created user"
    })
}

module.exports = {
    handleCreateUser
}