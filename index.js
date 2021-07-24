const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const plantController = require("./Controllers/Plants")
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use('/plants', plantController)
 
app.set("port", process.env.PORT || 4000)
app.listen(app.get('port'), () => {console.log(`Listening on ${app.get('port')}`)})

