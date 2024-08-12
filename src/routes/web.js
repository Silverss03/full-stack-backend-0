const express = require('express')
const { getHomePage, getNewPage, postCreateUser } = require('../controllers/MasterController')
const router = express.Router()

router.get('/', getHomePage)

router.get('/new', getNewPage)

router.post('/create-user', postCreateUser)

module.exports = router