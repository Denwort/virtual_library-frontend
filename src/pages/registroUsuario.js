import Head from 'next/head'
import Link from 'next/link'

const registroUsuario = () => {
    return(
    <>
        <Head>
            <title>Registro usuario</title>
        </Head>
        <div id="cuerpo_registro">
            <div id="titulo_registro1">
                <div id="titulo_registro">
                    <p><b>Sistema de reserva de libros</b></p>
                </div>
            </div>
            <div id="subtitulo_registro1">
                <div id="subtitulo_registro">
                    <p><b>Registro de usuario</b></p>
                </div>
            </div>

            <form action="enviarDatos" method='get' id="formulario_registro">

                <div id="todo_datPers">
                    <div id="text_datosPersonales">
                        <p>Datos Personales</p>
                    </div>
                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Nombres</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='text'  id="nombres"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>
                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Apellidos</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='text'  id="apellidos"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>
                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Tipo de Documento</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='text'  id="tipoDoc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>

                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Nro Documento</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='text'  id="nroDoc"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>
                </div>
                <div id="todo_datCuenta">
                    <div id="text_datosCuenta">
                        <p>Datos de la cuenta</p>
                    </div>
                    
                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Correo Electrónico</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='email'  id="email"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>

                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Password</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='password'  id="password"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>

                    <div id="text_field_usuario">
                        <div class="text_field">
                            <div class="state_layer">
                                <div class="content">
                                    <div id="text_usuario">
                                        <p>Ingrese Password nuevamente</p>
                                    </div>
                                    <div id="input_text_usuario">
                                        <input type='password'  id="nuevaPass"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="supporting-text">
                            <p></p>
                        </div> 
                    </div>
                    
                    <div id="alinearBoton">
                        <input type="button" value ="Registrar" id="bReg"/>
                    </div>
                </div>
            </form>
            

        </div>
    </>
)}


export default registroUsuario