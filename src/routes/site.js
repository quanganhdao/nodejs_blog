const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')


router.use('/search', siteController.search)
router.use('/about', siteController.about)
router.use('/', siteController.home)

module.exports =router;