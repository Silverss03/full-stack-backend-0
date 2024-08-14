const connection = require('../config/database')
const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users')
    return results
}

const getUserById = async (userID) => {
    const [results, fields] = connection.query('SELECT * FROM Users WHERE id = ?', [userID])
    const user = results && results.length > 0 ? results[0] : {}
    return user
}

module.exports = { getAllUsers, getUserById }