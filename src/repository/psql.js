import pg from 'pg'

export class PSQL {


  constructor(connectionString, tableName, rejectUnauthorized = false) {
    this._connectionString = connectionString 
    this._tableName = tableName
    this._rejectUnauthorized = rejectUnauthorized
    this._client = null
  }

  get tableName() {
    return this._tableName
  }

  async connect() {
    const { Client } = pg
    this._client = new Client({connectionString: this._connectionString, ssl: {
      rejectUnauthorized: this._rejectUnauthorized
    }})
    try {
      this._client.connect()
    }
    catch(err) {
      throw new Error(err.message)
    }
  
  }

  get client() {
    return this._client
  }

  async select(query) {
    if (!this._client) {
      throw new Error('You need to establish a connection first!')
    }
    const resultQuery = await this._client.query(query)
    return resultQuery

  }



}