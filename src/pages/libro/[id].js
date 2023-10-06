import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout.js'
import {useMiProvider} from '../context/contexto'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

const detalleLibro = () => 
{
    const router = useRouter()
    const [cuenta, setCuenta] = useMiProvider()

    const [libros, setLibros] = useState([]);
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
    useEffect(() => {
        leer();
    }, []);

    const id = router.query.id
    const p = libros.filter((item)=>{return item["id"] == id.toString()})[0]
    
    if (!p) return <p></p>

    async function handleEliminar(){
        const params = JSON.stringify(p)
        try {
            const peticion = await fetch (
                '/api/libros/eliminar',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
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
                                <p id="nombre-dl">PP</p>
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
                        <div id="contenedor_topi1">
                            <div class="topi-stateLayer">
                                <p id="top1">{p.genero}</p>
                            </div>
                        </div>
                        <div id="contenedor_topi2">
                            <div class="topi-stateLayer">
                                <p id="top2">{p.genero}</p>
                            </div>
                        </div>
                    </div>

                    <div id="dispo-nodispo">
                        <p id="dispoNodispo">Disponible</p>
                    </div>

                </div>
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
                                            <input type='date' id="inputDate" defaultValue={obtenerFechaActual()} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="supporting-text">
                                <p id="ddmmyyyy"> DD/MM/YYYY</p>
                            </div> 
                        </div>
                        <div id="contenedor_breservar">
                            <button id="bReserv" onClick={reservardl} >Reservar</button>
                        </div>
                        
                    </div>
                </form>

            {cuenta.tipo == 'admin' && (
                <button onClick={handleEliminar}>Eliminar</button>
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
    return `${year}-${mes}-${dia}`;
}
function hacernada(e){
    e.preventDefault()
}
function handleChange(event) {
    const fechaSeleccionada = event.target.value;
    // Realiza acciones con la fecha seleccionada si es necesario
  }

function reservardl() {
    const inputDate = document.getElementById("inputDate");
    const fechaParrafo = document.querySelector("#modalReser-dl p");
    const openModal = document.getElementById("bReserv");
    const modalReserva = document.getElementById("modalReser-dl");
    const closeModal = document.getElementById("close-dl");

    openModal.onclick = function(){
        modalReserva.style.visibility = "visible";
        const fechaSeleccionada = inputDate.value;
        fechaParrafo.textContent = `La reserva del recurso se ha realizado con éxito. Este debe ser devuelto hasta el día ${fechaSeleccionada}`;
    }

    closeModal.onclick = function(){
        modalReserva.style.visibility = "hidden";
    }
    // cerrar en ventana
    modalReserva.onclick = function(){
        modalReserva.style.visibility = "hidden";
    }

    // Aquí puedes realizar cualquier otra acción relacionada con la reserva

  }


