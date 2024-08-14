const express = require('express')
const { getHomePage, getNewPage, postCreateUser, getCreatePage, getListPage, getUpdatePage, postUpdateUser } = 
require('../controllers/MasterController')
const router = express.Router()

router.get('/', getHomePage)

router.get('/new', getNewPage)

router.get('/create', getCreatePage)

router.get('/list', getListPage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

module.exports = router