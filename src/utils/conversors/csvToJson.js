import * as dfd from 'danfojs-node'

export class CSVToJSONConversor {

  constructor() {
    this._uri = uri
  }

  readCSV(uri) {
    return new Promise((resolve, reject)=> {
      dfd.readCSV(uri)
        .then(df => {
          resolve(df)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}


