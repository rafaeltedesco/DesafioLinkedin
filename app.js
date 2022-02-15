import expressConfig from './src/config/expressConfig.js'
import express from 'express'
import { router } from './src/routes/router.routes.js'
import { loadDb } from './src/config/dbConfig.js'

const app = express()

app.use(router)

app.listen(expressConfig.PORT, async ()=> {
  try {
    await loadDb()
    console.log(`Server up and running on port ${expressConfig.PORT}`)
  }
  catch(err) {
    throw new Error('Cannot initialize DB')
  }

})