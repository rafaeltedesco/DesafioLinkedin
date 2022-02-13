import { CSVReader } from "../utils/readers/csvReader.js"

export async function readCSVFile(filepath) {
    const csvReader = new CSVReader()
    try {
      const df = await csvReader.readCSV(filepath)
      return df
    }
    catch(err) {
      throw new Error(err.message)
    }
}
