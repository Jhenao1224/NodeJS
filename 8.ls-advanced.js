const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try{
        files = await fs.readdir(folder)
    } catch {
        console.error('No se pudo leer el directorio ${folder}')
        process.exit(1)
    }
    const filePromises = files.map(async file => {

        const filePath = path.join(folder, file)
        let stats
        try {
            const stats = await fs.stat(filePath)   // este da la info del archivo
        } catch{
            console.error('No se pudo leer el directorio ${folder}')
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const Modified = stats.mtime.toLocaleString()
    
        return '${fileType} ${file} ${filesize.toString()} ${Modified}'
    })

    const filesInfo = await Promise.all(filePromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}


ls(folder)