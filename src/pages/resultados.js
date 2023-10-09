import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto'
import { useEffect, useState } from "react"; // Importa useEffect y useState
import { useRouter } from "next/router";
import Modal from "./modal.js"

const Busqueda = () => {
    const [cuenta, setCuenta] = useMiProvider();
    const router = useRouter();

    // Define un estado para almacenar los resultados de la API
    const [resultados, setResultados] = useState([]);
    const [reservas, setReservas] = useState([]);

    async function leer() {
        const opciones = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        };

        const request = await fetch("api/busqueda/leer", opciones);
        const data = await request.json();
        console.log(data);

        // Actualiza el estado con los resultados de la API
        setResultados(data);
    }

    // Llama a la función de leer cuando el componente se monta
    useEffect(() => {
        leer();
        leerReservas();
    }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez

    async function leer_reserva() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        var data
        const request = await fetch( 'api/reservas/leer', opciones)
        data = await request.json()
        console.log( data)
        return data

    }



    async function escribir(libro) {
        let data = await leer_reserva()
        
        // Generar nuevo objeto JSON
        let obj = { 
            "cuenta" : cuenta,
            "libro" : libro,
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

        const request = await fetch( 'api/reservas/escribir', opciones)
        data = await request.json()
        console.log( data)
    }

    // Revisar disponibilidad
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
    let disponibilidades = []
    resultados.forEach((libroActual, idx) => {
        disponibilidades.push(true)
        reservas.forEach((item, index) => {
            let fecha_final = Date.parse(item["fecha_final"])
            let fecha_actual = Date.parse(obtenerFechaActual())
            if (item.libro.id == libroActual.id && fecha_final >= fecha_actual) {
                disponibilidades[idx] = false
            }
        })
    })
    
    let boton_texto = ''
    let boton_href = ''
    if (cuenta.tipo == 'admin') {
        boton_texto = 'Modificar'
        boton_href = '/modificar'
    }
    else if (cuenta.tipo == 'user') {
        boton_texto = 'Reservar'
        boton_href = '/reservar'
    }
    else { // Sin haberse logeado (invitado)
        boton_texto = 'Reservar'
        boton_href = '/login'
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal1 = () => {
        setIsModalOpen(true);
    };

    const closeModal1 = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout content={
        <>
            <Head>
                <title>Busqueda</title>
            </Head>

            <div class="flex justify-between">
                <h1 class="text-2xl font-semibold mb-4">Búsqueda</h1>
                <button type="button" class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border rounded-full color_fondo_primario color_letra_blanco"
                onClick={()=>{router.push('/busqueda')}}>Volver a buscar</button>
            </div>

            <Image src="/divider.png" width={1088} height={1} class="py-4" alt="imagenDefault"></Image>

            <div class="flex justify-between">
                <h1 class="text-1xl font-semibold mb-4">Resultados de la busqueda</h1>
                <button type="button" class="bg-purple-bg text-purple-primary px-4 py-2 hover:bg-blue-600 border rounded-full color_letra_primario color_fondo_secundario"
                onClick={()=>{router.push('/')}}>Ver mis reservas</button>
            </div>
            
            <div class="flex flex-wrap shrink-0 gap-3 bg-white p-6 rounded-md shadow-md w-12/12 h-full justify-center">

                {Object.entries(resultados).map( (value,index) => {
                    const palabras = value[1].titulo.split(' ');
                    const tituloIniciales = palabras
                      .slice(0, 2) 
                      .map(word => word[0].toUpperCase())
                      .join('');
                    return ( 
                    
                        <div class="w-80 h-96 border-2 rounded-lg color_borde_primario" key={value[1].id}>
                            <div class="cursor-pointer" onClick={()=>{
                                router.push('/libro/'+value[1].id)
                            }}>
                                <div class="h-18 flex justify-between items-center">
                                    <div class="w-10 h-10 inline-flex m-4 bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full color_letra_blanco color_fondo_primario">{tituloIniciales}</div>
                                    <div class="w-60 h-18 line-clamp-3 text-purple-primary text-left items-center align-middle color_letra_primario">{value[1].titulo}</div>
                                </div>
                                <div class="flex bg-purple-bg mx-auto justify-center items-center">
                                    <Image src={value[1].imagen} height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                                </div>
                                <div class="py-2 px-4 text-purple-primary color_letra_primario">
                                    <div class="font-bold">ISBN: {value[1].isbn}</div>
                                    <div>Autor: {value[1].autor}</div>
                                    <div>Editorial: {value[1].editorial}</div>
                                </div>
                            </div>
                            {cuenta.tipo != 'guest' && (
                            <div class="h-16 flex justify-center items-center">
                                <button type="button" disabled={cuenta.tipo=='admin'? false : !disponibilidades[index]}
                                class="bg-purple-primary text-purple-bg border px-4 py-2 hover:bg-blue-600 rounded-full color_fondo_primario color_letra_blanco"
                                onClick={()=>{if(cuenta.tipo=='admin'){router.push('/modificar/'+value[1].id)}else if(cuenta.tipo=='user'){openModal1()}}}
                                    
                                >{boton_texto}</button>

                                <Modal isOpen={isModalOpen} onClose={closeModal1} id="modal">
                                    <p>Ingrese la Fecha de devolucion:</p>
                                    <br></br>
                                    <input type='date' id="inputDate" defaultValue={obtenerFechaFutura()} min={obtenerFechaActual()} max={obtenerFechaFutura()} onChange={(e)=> handleChange(e,value[1])} />
                                    <br></br>
                                    <button class="flex transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={()=>{closeModal1(); disponibilidades[index] = false}}>Confirmar</button>
                                </Modal>
                            </div>
                            )}
                        </div>
                    )}
                )}

            </div>

        </>
        }
        ></Layout>
    )

    //xd

    const openModalButtons = document.querySelectorAll(".open-modal-button");
    const closeModalButtons = document.querySelectorAll(".close-modal-button");
    const modals = document.querySelectorAll(".modal");
    const modalOverlays = document.querySelectorAll(".modal-overlay");

    // Función para abrir el modal
    function openModal(e) {
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden");
    }

    // Función para cerrar el modal
    function closeModal(e) {
        const modal = e.target.closest(".modal");
        modal.classList.add("hidden");
    }

    // Función para cerrar el modal cuando se hace clic en el fondo negro
    function closeModalOutside(e) {
        if (e.target.classList.contains("modal-overlay")) {
        closeModal(e);
        }
    }

    function obtenerFechaActual() {
        const hoy = new Date();
        const year = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0');
        const dia = String(hoy.getDate()).padStart(2, '0');
        return `${year}-${mes}-${dia}`;
    }
    function obtenerFechaFutura() {
        let treintaDias = new Date();
        treintaDias.setDate(treintaDias.getDate() + 30)
        const year = treintaDias.getFullYear();
        const mes = String(treintaDias.getMonth() + 1).padStart(2, '0');
        const dia = String(treintaDias.getDate()).padStart(2, '0');
        return `${year}-${mes}-${dia}`;
    }
    
    function obtenerFechaFutura_us(){
        const fecha = document.getElementById("inputDate").value
        return fecha
    }
    
    function handleChange(event,val) {
        const fechaSeleccionada = event.target.value;
        
        if(cuenta.tipo == 'admin') {
             const ruta = '/modificar/' + val.id.toString()
             router.push(ruta)
        }
        else if(cuenta.tipo == 'user' ){
      
        escribir(val)
        }

        
        
        // Realiza acciones con la fecha seleccionada si es necesario
    }

    // Asignar eventos a los botones
    openModalButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });

    closeModalButtons.forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    modalOverlays.forEach((overlay) => {
        overlay.addEventListener("click", closeModalOutside);
    });

    //xd
}
export default Busqueda