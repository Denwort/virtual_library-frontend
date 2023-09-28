import Head from 'next/head'
import Link from 'next/link'

const login = () => {
    return(
    <>
        <Head>
            <title>Login</title>
        </Head>
        <div id="cuerpo_login">
            <div id="titulo_login1">
                <div id="titulo_login">
                    <p><b>Sistema de reserva de libros</b></p>
                </div>
            </div>

            <form action="enviarDatos" method='get'>
            <div id="text_field_usuario">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content">
                            <div id="text_usuario">
                                <p>Usuario o Correo</p>
                            </div>
                            <div id="input_text_usuario">
                                <input type='text' placeholder='Ingrese usuario o correo' id="inputUsu"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            <div id="text_field_password">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content">
                            <div id="text_contraseña">
                                <p>Contraseña</p>
                            </div>
                            <div id="input_text_contraseña">
                                <input type='password' placeholder='Ingrese contraseña' id="inputContr"/>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

            <div id="contenedorContra">
                <div id="OlvideContra">
                    <p><Link href="/olvideCon" class="olvC">Olvidé mi contraseña</Link></p>
                </div>
            </div>


            <div id="alinearBotones">
            
            
            <div id="buttonRegis">
                <div id="slayer-regis">
                    <Link href="/registroUsuario" class="regis">Registro usuario</Link>
                </div>
            </div>
            <input type="button"  value ="Ingresar" id="bIngre"/>
            </div>
            </form>
            

        </div>
    </>
)}


export default login