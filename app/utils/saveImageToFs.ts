import fs from 'fs'

export function saveImageToFs(filePath: string, fileName: string) {
  fetch(filePath)
    .then((res) => res.blob())
    .then(async (blob) => {
      const buffer = Buffer.from(await blob.arrayBuffer())

      fs.writeFile(
        `./public/images/servants/${fileName}.png`,
        buffer,
        { flag: 'wx', encoding: 'binary' },
        (err) => {
          if (err) {
            return err.code === 'EEXIST' ? 'File already exists' : err
          }
        }
      )
    })
}
