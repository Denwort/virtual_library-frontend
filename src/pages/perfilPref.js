import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'

const Perfil = () => <Layout content={
<>
    <Head>
        <title>Perfil</title>
    </Head>
    <div id="tituloP">
            <p>Hola, Juan</p>
            <Image src="/divider.png" width={1088} height={1}></Image>
    </div>
    <div id="form_perfil">
        <div id="barra_perfil">
            <div id="barra_texto_notselected">
                <Link href="/perfilDatos">DATOS PERSONALES</Link>
            </div>
            <div id="barra_texto_notselected">
                <Link href="/perfilCuenta">CUENTA</Link>
            </div>
            <div id="barra_texto_selected" className="selected">
                <Link href="/perfilPref">PREFERENCIAS</Link>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
                <div id="imagen_perfil">
                    <Image src="/juliana.png" width={279} height={253} ></Image>
                </div>
            </div>
            <div class="col-span-1">
            <div id="cuadro_texto_idioma">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Idioma</p>
                            </div>
                            <div id="input_text_idioma">
                                <input type='text' placeholder='Ingrese idioma' id="inputIdioma"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_prefijo">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Prefijo</p>
                            </div>
                            <div id="input_text_prefijo">
                                <input type='text' placeholder='Ingrese prefijo' id="inputPrefijo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_color">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Color</p>
                            </div>
                            <div id="input_text_color">
                                <input type='color' id="inputColor"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            

            <input type="button" value ="Guardar" class="guardar" />

            </div>
            {/* Aquí termina la columna*/}
        
        </div>
    </div>

</>
}
></Layout>
export default Perfil