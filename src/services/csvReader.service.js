import pathsConfig from "../config/pathsConfig"
import { CSVReader } from "../utils/readers/csvReader"

export async function readCSVFile() {
  
  const csvReader = new CSVReader()
  try {
    const df = await csvReader.readCSV(pathsConfig.exampleUdemyCSVFile)
    console.log(df)
  }
  catch(err) {
    console.log(err.message)
  }
  
}
