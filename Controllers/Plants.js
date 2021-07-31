
const express = require ('express')
const router = express.Router()
const Plant = require('../Models/Plant.js')


// INDEX
router.get('/', (req,res)=> {
    res.send('hello')
    
})

router.get('/index', (req, res) => {
    Plant.find({})
        .then(plants => {
            console.log(plants)
            res.json(plants)
        })
})

// Create
router.post('/new', (req,res, next)=> {
    console.log('hi')
    console.log(req.body)
    Plant.create(req.body)
    //send back as json
    .then(plants => res.json(plants))
    // .then(res.redirect('/plants'))
    // if theres an error pass that bad boy on
    .catch(next)
})
router.put('/edit/:id', (req,res, next) =>{
    const id = req.params.id;
    console.log(id,req.body)
    Plant.findOneAndUpdate(
        { _id: id },
        req.body,
        {new:true}
    )
          .then(plant =>{
              Plant.find()
              .then(plants =>{ res.json({plant, plants}) })
          })
          .catch(next)
})
// //Edit render
// router.get('/edit/:id', (req,res) => {
//     console.log('on the edit route')
//     const routeId = req.params.id
//     Plant.findById(routeId)
//         .then(plants => {
//             // res.send(`todo: ${todo}`)
//             res.render('edit', Plants)
//         })
// })
// router.put('/edit/:id', (req,res, next) =>{
//     // const id = req.params.id
//     const id = req.params.id;
//     Plant.findOneAndUpdate(
//         { _id: id },
//         {
//         title: req.body.title,
//         glass: req.body.glass,
//         ingredients: req.body.ingredients,
//         instructions: req.body.instructions,
//         url: req.body.url,
//           },
//         {new:true}
//     )
//           .then(plants =>{
//               console.log(plants)
//               res.json(plants)
//           })
//           .then(res.redirect('/drinkit/index'))
//           .catch(next)
// })

// // New
// router.get('/new', (req, res)=>{
//     res.render('new')
// })
// // Get by Id
router.get('/show/:id', (req, res, next) => {
    console.log(req.params)
    Plant.findById(req.params.id)
    // .then(plants => res.json(plants))
    .then(plants=>res.json(plants))
    .catch(next)
})
// // Delete
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id
    console.log(req.params)
    Plant.findOneAndDelete(
        {_id: id}
    )
    .then(res.redirect('/plants/'))
    // if theres an error pass that bad boy on
    .catch(next)
})

module.exports = router