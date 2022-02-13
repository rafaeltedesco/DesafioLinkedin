import path from 'path'


const dbLocalFilesPath = path.resolve(process.cwd(), 'src', 'dataFiles')
const exampleUdemyCSVFile = path.resolve(dbLocalFilesPath, 'udemy_courses.csv')

export default {
  dbLocalFilesPath,
  exampleUdemyCSVFile
}