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
    let resultado=[]
    const tmp = JSON.stringify(req.body).replace("'",'"')
    const body = JSON.parse(tmp)
    data.forEach(element => {
        if (element.cuenta.id == body.id) {
            let aux = {}
            aux['id'] = element.libro.id
            aux['titulo'] = element.libro.titulo
            aux['imagen'] = element.libro.imagen
            aux['fecha_final'] = element.fecha_inicio
            resultado.push(aux)
        }
    });
    resultado.sort((a,b) => new Date(a.fecha_final).getTime() - new Date(b.fecha_final).getTime())
    console.log(resultado)
        
    // Escritura
    try {
        let tmp = JSON.stringify(resultado,null,'\t')
        console.log( tmp )

        await fsPromises.writeFile( ruta, tmp )
        return res.status(200).json( { "rpta" : "Se grabo OK"} )

    } catch( error) {
        console.log("Ocurrio un error al Escribir ", {error})
    }
}
