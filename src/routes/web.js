const express = require('express')
const { getHomePage, getNewPage, postCreateUser, getCreatePage, getListPage, getUpdatePage } = 
require('../controllers/MasterController')
const router = express.Router()

router.get('/', getHomePage)

router.get('/new', getNewPage)

router.get('/create', getCreatePage)

router.get('/list', getListPage)

router.post('/create-user', postCreateUser)

router.get('/update', getUpdatePage)

module.exports = router