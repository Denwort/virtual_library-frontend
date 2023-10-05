
import fsPromises from 'fs/promises'
import cuentas from '../../../json/cuentas.json'

export default async function registoAPI (req, res) {
    if(req.method !== 'POST'){
        res.status(405).send({"error": "metodo invalido"})
    }
    else if(req.method === 'POST'){

        const tmp = JSON.stringify(req.body).replace("'",'"')
        const body = JSON.parse(tmp)

        body["id"] = cuentas.length.toString()

        cuentas.push(body)

        await fsPromises.writeFile(
            './src/json/cuentas.json',
            JSON.stringify(cuentas, null, '\t')
        )

        res.status(200).json(
            cuentas
        )

    }
}