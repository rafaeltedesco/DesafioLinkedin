import { sqlService } from "../config/dbConfig.js"

const getCourses = async(req, res)=> {
    try {
      const { page, limit } = req.query
      const { rowCount, rows} = await sqlService.select(page, limit)
      res.send({rowCount, rows})
    }
    catch(err) {
      res.send({message: err.message})
    } 
  }


export default {
  getCourses
}