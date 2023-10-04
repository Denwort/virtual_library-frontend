import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto'

const Perfil = () => {

    const [cuenta, setCuenta] = useMiProvider()

    let cuenta_modificada = {...cuenta}

    function registrarCambio(e){
        cuenta_modificada[e.target.name] = e.target.value
    }
    
    const escribirJSON = async () =>{
        const params = JSON.stringify(cuenta_modificada)
        try {
            const peticion = await fetch (
                '/api/modificarAPI',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )

            const data = await peticion.json()
            alert("Datos actualizados")

        } catch (err) {
            console.log(err)
        }
  
    }

    return (

<Layout content={
<>
    <Head>
        <title>Perfil</title>
    </Head>
    <div id="tituloP">
            <p>Mi Perfil</p>
            <Image src="/divider.png" width={1088} height={1}></Image>
    </div>
    <div id="form_perfil">
        <div id="barra_perfil_usuario">
            <div id="barra_texto_selected_usuario" className="selected">
                <Link href="/perfilDatosUsu">DATOS PERSONALES</Link>
            </div>
            <div id="barra_texto_notselected_usuario">
                <Link href="/perfilCuentaUsu">CUENTA</Link>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
                <div id="imagen_perfil">
                    <Image src="/Juan.png" width={279} height={253} ></Image>
                </div>
            </div>
            <div class="col-span-1">
            <div id="cuadro_texto_nombre">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Nombres</p>
                            </div>
                            <div id="input_text_nombre">
                                <input type='text' placeholder='Ingrese nombre' id="inputNombreUsu" onChange={registrarCambio}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_tipo">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Tipo de Documento</p>
                            </div>
                            <div id="input_text_tipo">
                                <input type='text' placeholder='Ingrese documento' id="inputTipoUsu" onChange={registrarCambio}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_ape">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Apellidos</p>
                            </div>
                            <div id="input_text_ape">
                                <input type='text' placeholder='Ingrese apellidos' id="inputApeUsu" onChange={registrarCambio}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_nro">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Nro de documento</p>
                            </div>
                            <div id="input_text_nro">
                                <input type='text' placeholder='Ingrese número' id="inputNroUsu" onChange={registrarCambio}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>

            <button type="button" class="guardar" onClick={escribirJSON}>Guardar</button>

            </div>
            {/* Aquí termina la columna*/}
        
        </div>
    </div>

</>
}
></Layout>
    )
}
export default Perfil