import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto'
import { useState } from 'react'

const Perfil = () => {

    const [cuenta, setCuenta] = useMiProvider()

    let cuenta_modificada = { ...cuenta }

    function registrarCambio(e) {
        cuenta_modificada[e.target.name] = e.target.value
    }

    const escribirJSON = async (e) => {
        const params = JSON.stringify(cuenta_modificada)
        try {
            const peticion = await fetch(
                '/api/cuentas/modificar',
                {
                    method: 'POST',
                    body: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const data = await peticion.json()
            alert("Datos actualizados")

        } catch (err) {
            console.log(err)
        }

    }

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        event.preventDefault();
        if (!image) {
            alert("Por favor, selecciona una imagen antes de subirla.");
            return;
        }

        const body = new FormData();
        body.append("file", image);

        try {
            const response = await fetch("/api/imagenAPI", {
                method: "POST",
                body,
            });

            if (response.status === 200) {
                const newImageUrl = await response.json();

                // Actualiza el JSON con la nueva URL de la imagen
                cuenta_modificada.foto = newImageUrl;

                // Actualiza el JSON original con los datos modificados
                const cuentasActualizadas = cuentas.map((cuenta) => {
                    if (cuenta.id === cuenta_modificada.id) {
                        return cuenta_modificada;
                    }
                    return cuenta;
                });

                // Guarda los datos actualizados en tu archivo JSON
                fs.writeFileSync('../json/cuentas.json', JSON.stringify(cuentasActualizadas, null, 2));

                alert("Imagen actualizada");

            } else {
                alert("Error al subir la imagen");
            }
        } catch (err) {
            console.error(err);
            alert("Error al subir la imagen");
        }
    };
/*
    const guardarFoto = async (e) => {
        e.preventDefault()
        console.log("a")
        console.log(e.target.files)
            console.log("enviado")
            const foto = e.target.files[0]
            const fd=new FormData()
            fd.append('myfile',e.target.files[0])
            try {
                const res = await fetch (
                    '/api/imagenAPI',
                    {
                        method: 'POST',
                        body: fd,
                        headers: {
                            "Content-Type": "image/jpeg",
                        }
                    }
                )
                const response=await res.json(); 
                alert("imagen actualizada")
            } catch (err) {
                console.log(err)
            }

        
    }
    */
    

    return (
        <Layout content={
        <>
            <Head>
                <title>Perfil</title>
            </Head>
            <div id="tituloP">
                    <p>Hola, {cuenta.nombres}</p>
                    <Image src="/divider.png" width={1088} height={1}></Image>
            </div>
            <div id="form_perfil">
                <div id="barra_perfil">
                    <div id="barra_texto_notselected">
                        <Link href="/perfilDatos">DATOS PERSONALES</Link>
                    </div>
                    <div id="barra_texto_selected" className="selected">
                        <Link href="/perfilCuenta">CUENTA</Link>
                    </div>
                    <div id="barra_texto_notselected">
                        <Link href="/perfilPref">PREFERENCIAS</Link>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <div id="imagen_perfil">
                            <form onSubmit={uploadToServer} encType="multipart/form-data">
                                <Image src={createObjectURL || '/juliana.png'} width={279} height={253} />
                                    <input
                                    type="file"
                                    id="myfile"
                                    name="imagen"
                                    onChange={uploadToClient}
                                    accept="image/*" // Acepta solo archivos de imagen
                                    />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <form class="col-span-1" onSubmit={(e)=>e.preventDefault()}>
                    <div id="cuadro_texto_correo">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content_perfil">
                                    <div id="text_perfil">
                                        <p>Correo</p>
                                    </div>
                                    <div id="input_text_correo">
                                        <input type='email' placeholder='Ingrese correo' id="inputCorreo" name="correo" onChange={registrarCambio}/>
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
                                        <input type='password' placeholder='Ingrese contraseña' id="inputContra" name="contrasenha" onChange={registrarCambio}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>

                    <button type="button" class="guardar" onClick={escribirJSON}>Guardar</button>

                    </form>
                    {/* Aquí termina la columna*/}
                
                </div>
            </div>

        </>
        }
        ></Layout>
    )
}
export default Perfil