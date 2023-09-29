import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'

const detalleLibro = () => <Layout content={
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
                            <p id="nombre-dl">JS</p>
                        </div>
                    </div>
                    <div id="content_libro_dl">
                        <h1 id="titulo_libro_dl" >Psychology of Computer Porgramming</h1>
                        <p id="autor_libro_dl">Morgan Housel</p>
                    </div>
                </div>
                <div id="cont_libr_dl">
                    <Image src="/imagenLibro.png" width={184} height={151} alt="imagenLib" id="imglibro"></Image>
                </div>
                <div id="contenedor_texto-dl">
                    <p id="texto-dl">Este libro sólo tiene un objetivo principal: provocar el inicio de un nuevo campo de estudio: la programación informática como actividad humana o, en pocas palabras, la psicología de la programación informática. Todos los demás objetivos están subordinados a éste. Por ejemplo, he intentado que el libro sea interesante y no técnico, en la medida de lo posible, para animar al mayor número posible de personas a leerlo: no sólo programadores, sino gestores de programación y otras personas relacionadas con la programación en las muchas formas en que estamos relacionados con la programación hoy en día. Lo que intento conseguir es que el lector diga, al terminar el libro: "Sí, la programación no es sólo una cuestión de hardware y software. A partir de ahora tendré que ver las cosas de otra manera".</p>
                </div>
                <div id="todo-edit">
                    <div id="contenedor_editorial-dl">
                        <p id="editorial-dl-text">Editorial</p>
                        <p id="editorial-name-dl">Van Nostrand Reinhold Company</p>
                    </div>
                </div>

                <div id="text-topicos">
                    <p id="topi">Tópicos</p>
                </div>

                <div id="todosTopicos">
                    <div id="contenedor_topi1">
                        <div class="topi-stateLayer">
                            <p id="top1">Ingeniería de Software</p>
                        </div>
                    </div>
                    <div id="contenedor_topi2">
                        <div class="topi-stateLayer">
                            <p id="top2">Programación Web</p>
                        </div>
                    </div>
                </div>

                <div id="dispo-nodispo">
                    <p id="dispoNodispo">Disponible</p>
                </div>

            </div>
            <form action="reservarLibroDatos" method='get'>
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
                                        <input type='date' id="inputDate" value="2023-08-17"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p id="ddmmyyyy"> DD/MM/YYYY</p>
                        </div> 
                    </div>
                    <div id="contenedor_breservar">
                        <input type="button"  value ="Reservar" id="bReserv"/>
                    </div>
                </div>
            </form>



        </div>



    </>

}
></Layout>

export default detalleLibro