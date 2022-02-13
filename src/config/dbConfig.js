import 'dotenv/config'

const connectionString = process.env.CONNECTION_STRING
const SSL = process.env.SSL

export default {
  connectionString,
  SSL
}