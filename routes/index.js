const express = require('express')
const router = express.Router()



//  Welcome page
router.get('/', (req,res)=> res.render('welcome'));

// contact page
router.get('/contact',  (req, res) =>
    res.render('contact')
  )

module.exports = router 