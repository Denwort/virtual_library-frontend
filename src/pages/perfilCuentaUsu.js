import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto'
import { useState } from 'react'

const Perfil = () => {

    const [cuenta, setCuenta] = useMiProvider()

    let cuenta_modificada = {...cuenta}

    function registrarCambio(e){
        cuenta_modificada[e.target.name] = e.target.value
        console.log(e.target.value)
    }
    
    const escribirJSON = async () =>{
        const params = JSON.stringify(cuenta_modificada)
        try {
            const peticion = await fetch (
                '/api/cuentas/modificar',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            const data = await peticion.json()
            setCuenta(cuenta_modificada)
            alert("Datos actualizados")

        } catch (err) {
            console.log(err)
        }
  
    }

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    function uploadToClient(event){
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            const filename = i.name; // Get the filename
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
            cuenta_modificada[event.target.name]= filename;
            console.log(filename)
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
            <div id="barra_texto_notselected_usuario">
                <Link href="/perfilDatosUsu">DATOS PERSONALES</Link>
            </div>
            <div id="barra_texto_selected_usuario" className="selected">
                <Link href="/perfilCuentaUsu">CUENTA</Link>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
                <div id="imagen_perfil">
                    <Image src={cuenta.foto} name="foto" alt="foto de perfil" width={279} height={253} />
                        <input
                            type="file"
                            id="myfile"
                            name="foto"
                            onChange={uploadToClient}
                            accept="image/*" // Acepta solo archivos de imagen
                        />
                </div>
            </div>
            <div class="col-span-1">
            <div id="cuadro_texto_correo">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Correo</p>
                            </div>
                            <div id="input_text_correo">
                                <input type='email' placeholder='Ingrese correo' name="correo" id="inputCorreoUsu" defaultValue={cuenta.correo} onChange={registrarCambio}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_contra">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Contraseña</p>
                            </div>
                            <div id="input_text_contra">
                                <input type='password' placeholder='Ingrese contraseña' name="contrasenha" id="inputContraUsu" defaultValue={cuenta.contrasenha} onChange={registrarCambio}/>
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