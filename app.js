import expressConfig from './src/config/expressConfig.js'
import express from 'express'



const app = express()

app.get('/', (req, res)=> {
  res.send({teste: 'teste'})
})

app.listen(expressConfig.PORT, ()=> {
  console.log(`Server up and running on port ${expressConfig.PORT}`)
})