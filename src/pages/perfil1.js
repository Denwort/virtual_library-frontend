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
            <div id="barra_texto_selected" className="selected">
                <p>DATOS PERSONALES</p>
            </div>
            <div id="barra_texto_notselected">
                <p>CUENTA</p>
            </div>
            <div id="barra_texto_notselected">
                <p>PREFERENCIAS</p>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
                <div id="imagen_perfil">
                    <Image src="/juliana.png" width={273} height={253} ></Image>
                </div>
            </div>
            <div class="col-span-1">
            <div id="cuadro_texto_perfil">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Nombres</p>
                            </div>
                            <div id="input_text_perfil">
                                <input type='text' placeholder='Ingrese nombre' id="inputPerfil"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_perfil">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Tipo de Documento</p>
                            </div>
                            <div id="input_text_perfil">
                                <input type='text' placeholder='Ingrese documento' id="inputPerfil"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_perfil">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Apellidos</p>
                            </div>
                            <div id="input_text_perfil">
                                <input type='text' placeholder='Ingrese apellidos' id="inputPerfil"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>
            
            <div id="cuadro_texto_perfil">
                <div class="text_field">
                    <div class="state_layer">
                        <div class="content_perfil">
                            <div id="text_perfil">
                                <p>Nro de documento</p>
                            </div>
                            <div id="input_text_perfil">
                                <input type='text' placeholder='Ingrese número' id="inputPerfil"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="supporting-text">
                    <p></p>
                </div> 
            </div>

            <input type="button" value ="Guardar" class="guardar"/>

            </div>
            {/* Aquí termina la columna*/}
        
        </div>
    </div>

</>
}
></Layout>
export default Perfil