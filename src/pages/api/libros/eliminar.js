
import fsPromises from 'fs/promises'
import libros from '../../../json/libros.json'

export default async function registoAPI (req, res) {
    if(req.method !== 'POST'){
        res.status(405).send({"error": "metodo invalido"})
    }
    else if(req.method === 'POST'){
        
        const tmp = JSON.stringify(req.body).replace("'",'"')
        const body = JSON.parse(tmp)
        
        let indice = parseInt(body["id"])

        var BreakException = {};
        let idx = 0
        try{
            libros.forEach(item=>{
                if( parseInt(item["id"]) == parseInt(body["id"]) ) throw BreakException
                idx++
            })
        }catch(e){
            if (e !== BreakException) throw e;
        }

        libros.splice(idx,1)
        

        await fsPromises.writeFile(
            './src/json/libros.json',
            JSON.stringify(libros, null, '\t')
        )

        res.status(200).json(
            libros
        )

    }
}