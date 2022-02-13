export class DfToJSONConversor {

  constructor() {
    this._df = null
  }

  convertDfToJson(df) {
    return new Promise((resolve, reject)=> {
      try {
        resolve(df.toJSON())
      }
      catch(err) {
        reject(new Error(err.message))
      }
    })
  }
}


