import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout.js'
import {useMiProvider} from '../context/contexto'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Script from "next/script.js"

const detalleLibro = () => {
    const router = useRouter()
    const [cuenta, setCuenta] = useMiProvider()

    const [libros, setLibros] = useState([]);
    const [reservas, setReservas] = useState([]);

    async function leer() {
        const opciones = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const request = await fetch("../api/libros/leer", opciones);
        const data = await request.json();
        console.log(data);
        setLibros(data);
    }


    async function leerReservas() {
        const opciones = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const request = await fetch("../api/reservas/leer", opciones);
        const data = await request.json();
        console.log(data);
        setReservas(data);
    }
    useEffect(() => {
        leer();
        leerReservas();
    }, []);

    const id = router.query.id
    const p = libros.filter((item) => { return item["id"] == id.toString() })[0]

    if (!p) return <p></p>

    // Revisar disponibilidad
    let disponibilidad = 'Disponible'
    reservas.forEach((item, index) => {
        let fecha_final = Date.parse(item["fecha_final"])
        let fecha_actual = Date.parse(obtenerFechaActual())
        if (item.libro.id == id && fecha_final >= fecha_actual) {
            disponibilidad = 'No disponible'
            if(cuenta.tipo == 'admin') disponibilidad = 'Reservado por: ' + item.cuenta.nombres
        }
    })

    // Eliminar
    async function handleEliminar() {
        const params = JSON.stringify(p)
        try {
            const peticion = await fetch(
                '/api/libros/eliminar',
                {
                    method: 'POST',
                    body: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await peticion.json()
            alert("libro eliminado")
            router.push('/busqueda')

        } catch (err) {
            console.log(err)
        }

    }

    async function leer_reserva1() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        var data
        const request = await fetch( '../api/reservas/leer', opciones)
        data = await request.json()
        console.log( data)
        return data

    }



    async function escribir_reserva() {
        let data = await leer_reserva1()
        
        // Generar nuevo objeto JSON
        let obj = { 
            "cuenta" : cuenta,
            "libro" : p,
            "fecha_inicio" : obtenerFechaActual(),
            "fecha_final" : obtenerFechaFutura_us()
        }

        // Agregar al arreglo JSON
        data.push( obj)

        console.log( JSON.stringify(data))
        // Llamar a escribir
        const opciones = {
            method : 'POST',
            body : JSON.stringify( data ),
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( '../api/reservas/escribir', opciones)
        data = await request.json()
        console.log( data)
    }

    return <Layout content={
        <>
            <Head>
                <title>Citas</title>
            </Head>
            <div id="cuerpo_citas">

                <div id="contendor_ListItem">
                    <div id="contenedor_cita">
                        <h1 id="citas">Citas</h1>
                    </div>
                    <Image src="/full-width.png" width={1800} height={1} alt="fullwith"></Image>
                    <div id="state-layer-tituloLibro">
                        <div id="circuloConInicial">
                            <div id="BuildingblockeCircular">
                                <p id="nombre-dl">{obtenerIniciales(p.titulo)}</p>
                            </div>
                        </div>
                        <div id="content_libro_dl">
                            <h1 id="titulo_libro_dl" >{p.titulo}</h1>
                            <p id="autor_libro_dl">{p.autor}</p>
                        </div>
                    </div>
                    <div id="cont_libr_dl">
                        <Image src={p.imagen} width={184} height={151} alt="imagenLib" id="imglibro" class="w-auto h-40"></Image>
                    </div>
                    <div id="contenedor_texto-dl">
                        <p id="texto-dl">{p.descripcion}</p>
                    </div>
                    <div id="todo-edit">
                        <div id="contenedor_editorial-dl">
                            <p id="editorial-dl-text">Editorial</p>
                            <p id="editorial-name-dl">{p.editorial}</p>
                        </div>
                    </div>

                    <div id="text-topicos">
                        <p id="topi">Tópicos</p>
                    </div>

                    <div id="todosTopicos">
                        {Object.entries(p.genero.split(',')).map( (value,index) => {
                            return (
                            <div id="contenedor_topi1" key={index}>
                                <div class="topi-stateLayer">
                                    <p id="top1">{value[1]}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    <div id="dispo-nodispo">
                        <p id="dispoNodispo">{disponibilidad}</p>
                    </div>

                </div>
                {cuenta.tipo == 'user' && (
                <form action="reservarLibroDatos" onSubmit={hacernada}>
                    <div id="total-reserva">
                        <div id="contenedor_reserva-dl">
                            <h1 id="reservar-dl">Reservar</h1>
                        </div>
                        <Image src="/full-width.png" width={1800} height={1} alt="fullwith"></Image>
                        <div id="text_field_fecha-dl">
                            <div class="text_field">
                                <div class="state_layer">
                                    <div class="content">
                                        <div id="text_usuario">
                                            <p>Ingrese una Fecha limite</p>
                                        </div>
                                        <div id="input_text_usuario">
                                            <input type='date' id="inputDate" defaultValue={obtenerFechaFutura()} min={obtenerFechaActual()} max={obtenerFechaFutura()} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="supporting-text">
                                <p id="ddmmyyyy"> DD/MM/YYYY</p>
                            </div>
                        </div>
                        <div id="contenedor_breservar">
                            <button id="bReserv" onClick={()=>{escribir_reserva()}} disabled={disponibilidad!='Disponible'}>Reservar</button>

                        </div>

                    </div>
                </form>
                )}

                {cuenta.tipo == 'admin' && (
                    <div>
                        <br/>
                        <button onClick={handleEliminar}>Eliminar</button>
                    </div>
                )}



            </div>

            <div id="modalReser-dl" class="modal-container-dl">
                <div class="modal-content-dl">
                    <h2>Reserva completada</h2>
                    <p>La reserva del recurso se ha realizado con éxito. Este debe ser devuelto hasta el día</p>
                    <div id="close-dl" class="cerrar-dl">
                        <p>OK</p>
                    </div>
                </div>
            </div>
        </>

    }
    ></Layout>

}

export default detalleLibro


function obtenerFechaActual() {
    const hoy = new Date();
    const year = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    console.log(`${year}-${mes}-${dia}`)
    return `${year}-${mes}-${dia}`;
}
function obtenerFechaFutura() {
    let treintaDias = new Date();
    treintaDias.setDate(treintaDias.getDate() + 30)
    const year = treintaDias.getFullYear();
    const mes = String(treintaDias.getMonth() + 1).padStart(2, '0');
    const dia = String(treintaDias.getDate()).padStart(2, '0');
    console.log(`${year}-${mes}-${dia}`)
    return `${year}-${mes}-${dia}`;
}

function obtenerFechaFutura_us(){
    const fecha = document.getElementById("inputDate").value
    return fecha
}


function hacernada(e){
    e.preventDefault()
}
function handleChange(event) {
    const fechaSeleccionada = event.target.value;
    // Realiza acciones con la fecha seleccionada si es necesario
}
function obtenerIniciales(titulo) {
    const palabras = titulo.split(" ");
    const iniciales = palabras
      .slice(0, 2) 
      .map((palabra) => palabra[0].toUpperCase());
    return iniciales.join("");
  }

function reservardl() {
    const inputDate = document.getElementById("inputDate");
    const fechaParrafo = document.querySelector("#modalReser-dl p");
    const openModal = document.getElementById("bReserv");
    const modalReserva = document.getElementById("modalReser-dl");
    const closeModal = document.getElementById("close-dl");

    openModal.onclick = function () {
        modalReserva.style.visibility = "visible";
        const fechaSeleccionada = inputDate.value;
        fechaParrafo.textContent = `La reserva del recurso se ha realizado con éxito. Este debe ser devuelto hasta el día ${fechaSeleccionada}`;
    }

    closeModal.onclick = function () {
        modalReserva.style.visibility = "hidden";
    }
    // cerrar en ventana
    modalReserva.onclick = function () {
        modalReserva.style.visibility = "hidden";
    }

    // Aquí puedes realizar cualquier otra acción relacionada con la reserva
    
}


