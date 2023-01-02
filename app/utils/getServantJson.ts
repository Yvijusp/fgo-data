import axios from 'axios'
import fs from 'fs/promises'
import { isEqual } from 'lodash'
import path from 'path'

export default async function getServantJson() {
  const { data } = await axios.get(
    'https://api.atlasacademy.io/export/NA/nice_servant.json'
  )

  return fs
    .readFile(path.resolve(process.cwd(), 'app/data/nice_servant.json'), 'utf8')
    .then((file) => {
      if (!isEqual(JSON.stringify(data), file)) {
        writeServantFile(data)
      }
      return file
    })
    .catch((err) => {
      writeServantFile(data)
    })
}

function writeServantFile(data: any) {
  return fs.writeFile(
    path.resolve(process.cwd(), 'app/data/nice_servant.json'),
    JSON.stringify(data),
    'utf8'
  )
}
