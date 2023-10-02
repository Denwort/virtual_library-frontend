import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import cuentas from '../json/cuentas.json'
import { useMiProvider } from './context/contexto'

const login = () => {
    const router = useRouter()
    const [estado, setEstado] = useMiProvider()

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

            <form action="" onSubmit={hacerNada} method='get'>
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
                    <p class="olvC">Olvidé mi contraseña</p>
                </div>
            </div>


            <div id="alinearBotones">
            
            
            <div id="buttonRegis">
                <div id="slayer-regis">
                    <Link href="/registroUsuario" class="regis">Registro usuario</Link>
                </div>
            </div>
            <button id="bIngre" onClick={
                ()=>{
                    let res = Object.entries(cuentas).filter(
                        (item) => {
                            console.log(item[1])
                            return item[1].correo == document.getElementById("inputUsu").value && 
                            item[1].contrasenha == document.getElementById("inputContr").value}
                    )
                    if (res.length == 0) {
                        alert("Datos incorrectos")
                        return
                    }

                    let cuenta = res[0][1]
                    if(cuenta.tipo == "admin"){
                        console.log("administrador")
                        setEstado('admin')
                        router.push('/page')
                    }
                    else if(cuenta.tipo == "user"){
                        console.log("usuario")
                        setEstado('user')
                        router.push('/page')
                    }
                    
                }
            }>Ingresar</button>
            </div>
            </form>
            

        </div>
    </>
)}


export default login


function hacerNada(e){
    e.preventDefault()
}