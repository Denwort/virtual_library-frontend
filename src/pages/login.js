import Head from 'next/head'

const login = () => {
    return(
    <>
        <Head>
            <title>Login</title>
        </Head>
        <div id="cuerpo_login">
            <div id="titulo_login">
                <p>Sistema de reserva de libros</p>
            </div>
            <div id="text_field_usuario">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content">
                            <div id="text_usuario">
                                <p>Usuario o Correo</p>
                            </div>
                            <div id="input_text_usuario">
                                <input type='text' placeholder='Ingrese usuario o correo'/>
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
                            <input type='password' placeholder='Ingrese contraseña'/>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>

            
        </div>
        
    </>
)}


export default login