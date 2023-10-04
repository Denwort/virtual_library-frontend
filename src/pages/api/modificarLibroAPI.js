
import fsPromises from 'fs/promises'
import libros from '../../json/libreria.json'

export default async function registoAPI (req, res) {
    if(req.method !== 'POST'){
        res.status(405).send({"error": "metodo invalido"})
    }
    else if(req.method === 'POST'){

        const tmp = JSON.stringify(req.body).replace("'",'"')
        const body = JSON.parse(tmp)

        libros[body.id] = body

        await fsPromises.writeFile(
            './src/json/libreria.json',
            JSON.stringify(libros, null, '\t')
        )

        res.status(200).json(
            libros
        )

    }
}