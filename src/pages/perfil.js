import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'

const Perfil = () => <Layout content={
<>
    <Head>
        <title>Perfil</title>
    </Head>
    <div>
            <p>Hola, Juan</p>
            <Image src="/divider.png" width={1088} height={1}></Image>
    </div>
    <div id="form_perfil">
        <div style={{width: '100%', height: '100%', background: '#FEF7FF', borderRadius: 10, border: '1px #6750A4 solid'}} />
        <div style={{width: '100%', height: '100%', textAlign: 'center', color: '#6750A4', fontSize: 12, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>DATOS PERSONALES</div>
    
    
    </div> 

</>
}
></Layout>
export default Perfil