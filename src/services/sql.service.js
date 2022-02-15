
export class SQLService {

  constructor(sql) {
    this._sql = sql
  }

  async connect() {
    await this._sql.connect()
    console.log('connected')
  }

  async select(page=1, limit=100, orderBy='course_id') {
    const query = `SELECT * FROM ${this._sql.tableName} ORDER BY ${orderBy} LIMIT ${limit} OFFSET ${(page-1) * limit}`
    return await this._sql.select(query)
  }
}