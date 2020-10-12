let express = require('express')
let router = express.Router()

let burger = require('../models/burger.js')

router.get('/', (req, res) => {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    }
    res.render('index', hbsObject)
  })
})

router.post('/', (req, res) => {
  burger.insertOne(['burger_name'], [req.body.burger_name], (data) => {
    res.redirect('/')
  })
})

router.post('/:id', (req, res) => {
  let condition = 'id = ' + req.params.id
  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    (data) => {
      res.redirect('/')
    }
  )
})

module.exports = router
