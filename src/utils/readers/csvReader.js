import * as dfd from 'danfojs-node'

export class CSVReader {

  constructor() {
    this._uri = null
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


