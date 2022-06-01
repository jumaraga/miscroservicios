const config = require('../config')
const express = require('express')
const app = express()
app.use(express.json())
app.listen(config.mySqlService.port, () => {
   console.log('servicio MySql')
})