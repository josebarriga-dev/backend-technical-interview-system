const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())


app.use('/', (req,res,next) => {
    console.log('req', req)
    res.status(200).json({ message: 'holaa desde express'})
})

module.exports = app