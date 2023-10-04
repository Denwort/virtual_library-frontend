import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto'

const Index = () => {

    const [cuenta, setCuenta] = useMiProvider()

    return(
    <Layout content={
        <>
            <Head>
                <title>..:: Pagina1 ::..</title>
            </Head>
            <div>
                <p id="bienvenida"><b>Bienvenido, {cuenta.nombres}!</b></p>
                <Image src="/divider.png" width={1088} height={1}></Image>
            </div>
            <br></br>
            <div class="rectangulo">
                <p id ="subtitulo">Últimas reservas</p>
                <br></br>
                <div class="grid gap-x-14 grid-cols-7 ">
                    <div class="col-span-1">
                        <div class="libro">
                            <div class="grid grid-cols-6 col-span-1">
                                <div class="col-start-1 col-span-1">
                                    <div className="circulo">
                                        <p className="inicial">A</p>
                                    </div>
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
                            <div class="grid grid-cols-6 col-span-1">
                                <div class="col-start-1 col-span-1">
                                    <div className="circulo">
                                        <p className="inicial">A</p>
                                    </div>
                                </div>
                                <div class="col-start-2 col-end-5">
                                    <Link href="">Introduction to the theory...</Link>
                                </div>
                                <div class="col-start-5 col-span-1">

                                </div>
                            </div>
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
                                    <div class="circulo">
                                        <p className="inicial">A</p>
                                    </div>
                                </div>
                                <div class="col-start-2 col-end-5">
                                    <Link href="">Clean Code</Link>
                                </div>
                                <div class="col-start-6 col-span-1">
                                    <div class="imagenLibro">
                                        <Image src="https://images.cdn2.buscalibre.com/fit-in/180x180/1f/a6/1fa666e0f93fb0bc63c4c214188f3a46.jpg" width={80} height={101}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-start-4 col-span-1">
                        <div class="libro">
                            <div class="grid grid-cols-6 col-span-1">
                                <div class="col-start-1 col-span-1">
                                    <div className="circulo">
                                        <p className="inicial">A</p>
                                    </div>
                                </div>
                                <div class="col-start-2 col-end-5">
                                    <Link href="/libro/">Introduction to the theory...</Link>
                                </div>
                                <div class="col-start-5 col-span-1">

                                </div>
                            </div>
                        </div> 
                    </div>  
                </div>
            </div>
        </>
    }
    ></Layout>
    )
}

export default Index