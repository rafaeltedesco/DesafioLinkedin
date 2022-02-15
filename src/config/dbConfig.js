import 'dotenv/config'
import { PSQL } from "../repository/psql.js"
import { SQLService } from "../services/sql.service.js"

const CONNECTION_STRING = process.env.CONNECTION_STRING
const TABLENAME = process.env.TABLENAME

export const sqlService = new SQLService(new PSQL(CONNECTION_STRING, TABLENAME))

export const loadDb = async ()=>
{
  await sqlService.connect()
}

export default {
  CONNECTION_STRING,
  TABLENAME
}