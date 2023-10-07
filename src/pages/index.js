import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto'
import library from '../json/library.json'
import { useState,useEffect } from "react"

const Index = () => {

    const [cuenta, setCuenta] = useMiProvider()

    const libro1 = library[0]
    const libro2 = library[1]
    const libropv1 = library[0]
    const libropv2 = library[1]

    const escribirJSON = async (e) => {
        const params = JSON.stringify(cuenta)
        try {
            const peticion = await fetch(
                '/api/proximos/escribir.js',
                {
                    method: 'POST',
                    body: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await peticion.json()

        } catch (err) {
            console.log(err)
        }

    }

    const [recientes, setRecientes] = useState([]);
    async function leerRecientes() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( 'api/recientes/leer', opciones)
        const data = await request.json()
        console.log( data)
        setRecientes(data)
        return data
    }
    const [proximos, setProximos] = useState([]);
    async function leerProximos() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( 'api/proximos/leer', opciones)
        const data = await request.json()
        console.log( data)
        setProximos(data)
        return data
    }

    useEffect(() => {
        leerRecientes();
        leerProximos();
    }, []);


    return(
    <Layout content={
        <>
            <Head>
                <title>..:: Pagina1 ::..</title>
            </Head>
            <p></p>
            <div>
                <p id="bienvenida"><b>Bienvenido, {cuenta.nombres}!</b></p>
                <Image src="/divider.png" width={1088} height={1}></Image>
            </div>
            <br></br>
            {cuenta.tipo != 'guest' && ( //Guest no ve nada en index
            <div>

                <div class="rectangulo">
                    <div class="contenedorSubtitulo">
                        <p class ="subtitulo">Últimas reservas</p>
                        </div>
                        <br></br>
                        <div class="flex flex-wrap">
                            {Object.entries(recientes).map( (value,index) => {
                                return ( 
                                    <div>
                                        <Link href="/libros/[id]" as={"/libros/" + value[1].libro_id}>
                                            <div class="libro">
                                                <div class="grid grid-cols-6 col-span-1">
                                                    <div class="col-start-1 col-span-1">
                                                        <div class="circulo">
                                                            <p className="inicial">A</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-start-2 col-end-5">
                                                        <div className="contenedorTituloLibro">
                                                            <div class="line-clamp-2">
                                                                <p class= "tituloLibro"><b>"{value[1].titulo}"</b></p>
                                                            </div>
                                                        </div>
                                                        <div className="contenedorInfoLibro">
                                                            <div class="line-clamp-1">
                                                                <p className="infoLibro">Reservado el: {value[1].fecha_inicio}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-start-6 col-span-1">
                                                        <div class="imagenLibro">
                                                            <Image src={value[1].imagen} width={80} height={101}></Image>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>    
                                    </div>
                                )
                            })
                            }
                        </div>
                </div>
                
                <div class="rectangulo">
                    <div class="contenedorSubtitulo">
                        <h2 class="subtitulo">Próximos a vencer</h2>
                    </div>
                    <br></br>
                    <div class="flex flex-wrap">
                            {Object.entries(proximos).map( (value,index) => {
                                return ( 
                                    <div>
                                        <Link href="/libros/[id]" as={"/libros/" + value[1].libro_id}>
                                            <div class="libro">
                                                <div class="grid grid-cols-6 col-span-1">
                                                    <div class="col-start-1 col-span-1">
                                                        <div class="circulo">
                                                            <p className="inicial">A</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-start-2 col-end-5">
                                                        <div className="contenedorTituloLibro">
                                                            <div class="line-clamp-2">
                                                                <p class= "tituloLibro"><b>"{value[1].titulo}"</b></p>
                                                            </div>
                                                        </div>
                                                        <div className="contenedorInfoLibro">
                                                            <div class="line-clamp-1">
                                                                <p className="infoLibro">Fecha de vencimiento: {value[1].fecha_final}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-start-6 col-span-1">
                                                        <div class="imagenLibro">
                                                            <Image src={value[1].imagen} width={80} height={101}></Image>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>    
                                    </div>
                                )
                            })
                            } 
                    </div>
                </div>

            </div>
            )}
        </>
    }
    ></Layout>
    )
}

export default Index