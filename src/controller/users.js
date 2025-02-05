const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers()
        res.json({ 
            message: 'Get All Users Success!',
            data: data
         }) 
    } catch (error) {
        res.status(500).json({ 
            message: 'Get All Users Failed!',
            serverMessage: error
         })
    }
}

const createUser = async (req, res) => {
    const {body} = req;
    
    try {
        await UsersModel.createUser(body)
        res.json({ 
            message: 'Create User Success!',
            data: body
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Create Users Failed!',
            serverMessage: error
         })
    }
    
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params
    
    try {
        await UsersModel.deleteUser(idUser)
        res.json({ message: 'Delete User Success!' })
    } catch (error) {
        res.status(500).json({ 
            message: 'Delete Users Failed!',
            serverMessage: error
         })
    }
    
}

module.exports = { 
    createUser, 
    getAllUsers,
    deleteUser,
}