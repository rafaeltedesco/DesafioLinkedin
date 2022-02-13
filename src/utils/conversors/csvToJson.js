import pathsConfig from '../../config/pathsConfig.js'

import * as dfd from 'danfojs-node'

export class CSVToJSONConversor {

  constructor(uri = null) {
    this._uri = uri || pathsConfig.exampleUdemyCSVFile
  }

  readCSV(uri) {
    return new Promise((resolve, reject)=> {
      dfd.readCSV(uri || this._uri)
        .then(df => {
          resolve(df)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

}


