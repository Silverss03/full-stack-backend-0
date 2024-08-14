const connection = require('../config/database')
const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users')
    return results
}

const getUserById = async (userID) => {
    const [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userID])
    const user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (userID, email, name, message) => {
    const [result, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, message, userID]
    )
}

module.exports = { getAllUsers, getUserById, updateUserById }