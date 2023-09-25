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
    </div>


</>
}
></Layout>
export default Perfil