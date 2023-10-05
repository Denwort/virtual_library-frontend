
import fsPromises from 'fs/promises'
import libros from '../../../json/libros.json'

export default async function registoAPI (req, res) {
    if(req.method !== 'POST'){
        res.status(405).send({"error": "metodo invalido"})
    }
    else if(req.method === 'POST'){

        const tmp = JSON.stringify(req.body).replace("'",'"')
        const body = JSON.parse(tmp)

        let idx = 0
        libros.forEach((item)=>{
            if(parseInt(item.indice) > idx) idx = item.indice
        })
        idx = idx + 1

        body["id"] = idx.toString()

        libros.push(body)

        await fsPromises.writeFile(
            './src/json/libros.json',
            JSON.stringify(libros, null, '\t')
        )

        res.status(200).json(
            libros
        )

    }
}