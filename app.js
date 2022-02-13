import expressConfig from './src/config/expressConfig.js'
import express from 'express'
import { readCSVFile } from './src/services/csvReader.service.js'
import pathsConfig from './src/config/pathsConfig.js'
import { convertDfToJson } from './src/services/dfToJson.service.js'

const app = express()

app.get('/', async (req, res)=> {
  try {
    const df = await readCSVFile(pathsConfig.exampleUdemyCSVFile)
    const jsonData = await convertDfToJson(df)
    res.send(jsonData)
  }
  catch(err) {
    res.send({message: err.message})
  }
  
})

app.listen(expressConfig.PORT, ()=> {
  console.log(`Server up and running on port ${expressConfig.PORT}`)
})