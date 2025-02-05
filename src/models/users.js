const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM users";
    return dbPool.execute(SQLQuery)
}

const createUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email) VALUES ('${body.name}', '${body.email}')`;
    return dbPool.execute(SQLQuery)
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id = ${idUser}`;
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser
}