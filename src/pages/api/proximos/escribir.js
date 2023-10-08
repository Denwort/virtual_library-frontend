import fsPromises from 'fs/promises'
import path from 'path'
import process from 'process'

export default async function leer(req, res) {
    let filePath = 'src/json/proximos.json'
    let ruta = path.join( process.cwd() , filePath )

    let filePathDatos = '/src/json/reservas.json'
    let rutaDatos = path.join( process.cwd() , filePathDatos )

    // lectura datos
    let data
    try {
        data = await fsPromises.readFile( rutaDatos )
        console.log(data)
        data=JSON.parse(data)

    } catch( error) {
        console.log("Ocurrio un error al leer ")
    }
    //Modificar data

    let res
    // Escritura
    try {
        let tmp = JSON.stringify(data,null,'\t')
        console.log( tmp )

        await fsPromises.writeFile( ruta, tmp )
        return res.status(200).json( { "rpta" : "Se grabo OK"} )

    } catch( error) {
        console.log("Ocurrio un error al Escribir ", {error})
    }

}