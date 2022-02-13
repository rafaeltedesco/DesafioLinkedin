import { DfToJSONConversor } from "../utils/conversors/csvToJson.js";

export async function convertDfToJson(df) {
  try {
    const jsonConversor = new DfToJSONConversor()
    const jsonData = await jsonConversor.convertDfToJson(df)
    return jsonData
  }
  catch(err) {
    throw new Error(err)
  }
}
