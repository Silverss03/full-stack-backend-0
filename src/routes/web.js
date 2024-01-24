const express = require('express')
const { getHomePage, getNewPage } = require('../controllers/MasterController')
const router = express.Router()

router.get('/', getHomePage)

router.get('/new', getNewPage)

module.exports = router