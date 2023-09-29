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
            <div class="grid gap-x-14 grid-cols-7">
                <div class="col-span-1">
                    <div class="libro">
                    <Link href="">Clean Code</Link>
                    </div>
                </div>
                <div class="col-start-4 col-span-1">
                    <div class="libro">
                    <Link href="">Introduction to the theory...</Link>
                    </div> 
                </div>
            </div>  
        </div>
        <div class="rectangulo">
            <p id="subtitulo">Los más pedidos</p>
            <br></br>
            <div class="grid gap-x-14 grid-cols-7 ">
                <div class="col-span-1">
                    <div class="libro">
                        <div class="grid grid-cols-6 col-span-1">
                            <div class="col-start-1 col-span-1">
                                
                            </div>
                            <div class="col-start-2 col-end-5">
                                <Link href="">Clean Code</Link>
                            </div>
                            <div class="col-start-5 col-span-1">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-start-4 col-span-1">
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