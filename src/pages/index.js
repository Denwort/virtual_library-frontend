import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto'
import library from '../json/library.json'
import { useState,useEffect } from "react"

const Index = () => {

    const [cuenta, setCuenta] = useMiProvider()

    const escribirJSON = async (e) => {
        const params = JSON.stringify(cuenta)
        try {
            const peticion = await fetch(
                '/api/proximos/escribir',
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
    const escribirJSONMasPedidos = async (e) => {
        try {
            const peticion = await fetch(
                '/api/masPedidos/escribir',
                {
                    method: 'POST',
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

    const escribirJSONRecientes = async (e) => {
        const params = JSON.stringify(cuenta)
        try {
            const peticion = await fetch(
                '/api/recientes/escribir',
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
    const [masPedidos, setMasPedidos] = useState([]);
    async function leerMasPedidos() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( 'api/masPedidos/leer', opciones)
        const data = await request.json()
        console.log( data)
        setMasPedidos(data)
        return data
    }


    //Syncronizar las funciones
    async function todo(){
        await escribirJSONRecientes();
        await escribirJSON();
        await escribirJSONMasPedidos();
        await leerRecientes();
        await leerProximos();
        await leerMasPedidos();
    }
    useEffect(() => {
        todo();
    }, []);

    // Funcionalidad para "Ver todo"
    const [verTodo, setVerTodo] = useState(false);


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
                            {Object.entries(verTodo?recientes:recientes.slice(0,2)).map( (value,index) => {
                                return ( 
                                    <div>
                                        <Link href="/libros/[id]" as={"/libros/"}>
                                            <div class="libro">
                                                <div class="grid grid-cols-6 col-span-1">
                                                    <div class="col-start-1 col-span-1">
                                                        <div class="circulo">
                                                        <p className="inicial">{obtenerInicialesEnMayuscula(value[1].titulo)}</p>
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
                            <button className="verTodo" id="verTodo" onClick={()=>{setVerTodo(!verTodo)}}> Ver todo</button>
                </div>
                {cuenta.tipo == 'user' && (
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
                                                            <p className="inicial">{obtenerInicialesEnMayuscula(value[1].titulo)}</p>
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
                </div>)}
                {cuenta.tipo == 'admin' && (
                <div class="rectangulo">
                    <div class="contenedorSubtitulo">
                        <h2 class="subtitulo">Los más pedidos</h2>
                    </div>
                    <br></br>
                    <div class="flex flex-wrap">
                            {Object.entries(masPedidos).map( (value,index) => {
                                return ( 
                                    <div>
                                        <Link href="/libros/[id]" as={"/libros/" + value[1].libro.id}>
                                            <div class="libro">
                                                <div class="grid grid-cols-6 col-span-1">
                                                    <div class="col-start-1 col-span-1">
                                                        <div class="circulo">
                                                            <p className="inicial">{obtenerInicialesEnMayuscula(value[1].libro.titulo)}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-start-2 col-end-5">
                                                        <div className="contenedorTituloLibro">
                                                            <div class="line-clamp-2">
                                                                <p class= "tituloLibro"><b>"{value[1].libro.titulo}"</b></p>
                                                            </div>
                                                        </div>
                                                        <div className="contenedorInfoLibro">
                                                            <div class="line-clamp-1">
                                                                <p className="infoLibro">Veces pedido: {value[1].cantidad}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-start-6 col-span-1">
                                                        <div class="imagenLibro">
                                                            <Image src={value[1].libro.imagen} width={80} height={101}></Image>
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
                </div>)}

            </div>
            )}
        </>
    }
    ></Layout>
    )
}

export default Index

function obtenerInicialesEnMayuscula(texto) {
    const palabras = texto.split(" ");
    let iniciales = "";
  
    for (let i = 0; i < palabras.length && i < 2; i++) {
      const palabra = palabras[i];
      if (palabra.length > 0) {
        const inicial = palabra.charAt(0).toUpperCase();
        iniciales += inicial;
      }
    }

    if (iniciales === "") {
      return texto.toUpperCase();
    }
  
    return iniciales;
  }