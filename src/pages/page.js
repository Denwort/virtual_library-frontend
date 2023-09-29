import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'

const Index = () => <Layout content={
    <>
        <Head>
            <title>..:: Pagina1 ::..</title>
        </Head>
        <div>
            <p id="bienvenida"><b>Bienvenido, Juan!</b></p>
            <Image src="/divider.png" width={1088} height={1}></Image>
        </div>
        <br></br>
        <div class="rectangulo">
            <p id ="subtitulo">Últimas reservas</p>
            <br></br>
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-1">
                    <div class="libro">
                    <Link href="">Clean Code</Link>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="libro">
                    <Link href="">Introduction to the theory...</Link>
                    </div> 
                </div>
            </div>  
        </div>
        <div class="rectangulo">
            <p id="subtitulo">Los más pedidos</p>
            <br></br>
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-1">
                    <div class="libro">
                        <Link href="">Clean Code</Link>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="libro">
                        <Link href="">Introduction to the theory...</Link>
                    </div> 
                </div>  
            </div>
        </div>
    </>
}
></Layout>
export default Index