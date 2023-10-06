import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto'
import library from '../json/library.json'

const Index = () => {

    const [cuenta, setCuenta] = useMiProvider()

    const libro1 = library[0]
    const libro2 = library[1]
    const libropv1 = library[0]
    const libropv2 = library[1]

    return(
    <Layout content={
        <>
            <Head>
                <title>..:: Pagina1 ::..</title>
            </Head>
            <p></p>
            <div>
                <p id="bienvenida"><b>Bienvenido, {cuenta.nombres}!</b></p>
                <Image src="/divider.png" width={1088} height={1}></Image>
            </div>
            <br></br>
            {cuenta.tipo != 'guest' && ( //Guest no ve nada en index
            <div>

                <div class="rectangulo">
                    <div class="contenedorSubtitulo">
                        <p class ="subtitulo">Últimas reservas</p>
                        </div>
                        <br></br>
                        <div class="grid gap-x-14 grid-cols-7 ">
                        <div class="col-span-1">
                                <Link href={libro1["url-compra"]}>
                                    <div class="libro">
                                        <div class="grid grid-cols-6 col-span-1">
                                            <div class="col-start-1 col-span-1">
                                                <div class="circulo">
                                                    <p className="inicial">A</p>
                                                </div>
                                            </div>
                                            <div class="col-start-2 col-end-5">
                                                <div className="contenedorTituloLibro">
                                                    <div class="line-clamp-2">
                                                        <p class= "tituloLibro"><b>"{libro1.titulo}"</b></p>
                                                    </div>
                                                </div>
                                                <div className="contenedorInfoLibro">
                                                    <div class="line-clamp-1">
                                                        <p className="infoLibro">18/09/2023 08:00 am</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-start-6 col-span-1">
                                                <div class="imagenLibro">
                                                    <Image src={libro1["imagen-portada-url"]} width={80} height={101}></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>    
                            </div>
                            <div class="col-start-4 col-span-1">
                            <Link href={libro2["url-compra"]}>
                                    <div class="libro">
                                        <div class="grid grid-cols-6 col-span-1">
                                            <div class="col-start-1 col-span-1">
                                                <div class="circulo">
                                                    <p className="inicial">A</p>
                                                </div>
                                            </div>
                                            <div class="col-start-2 col-end-5">
                                                <div className="contenedorTituloLibro">
                                                    <div class="line-clamp-2">
                                                        <p class= "tituloLibro"><b>"{libro2.titulo}"</b></p>
                                                    </div>
                                                </div>
                                                <div className="contenedorInfoLibro">
                                                    <div class="line-clamp-1">
                                                        <p className="infoLibro">18/09/2023 08:00 am</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-start-6 col-span-1">
                                                <div class="imagenLibro">
                                                    <Image src={libro2["imagen-portada-url"]} width={80} height={101}></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>    
                            </div>  
                        </div>
                </div>
                
                <div class="rectangulo">
                    <div class="contenedorSubtitulo">
                        <h2 class="subtitulo">Próximos a vencer</h2>
                    </div>
                    <br></br>
                    <div class="grid gap-x-14 grid-cols-7 ">
                        <div class="col-span-1">
                            <Link href={libropv1["url-compra"]}>
                                <div class="libro">
                                    <div class="grid grid-cols-6 col-span-1">
                                        <div class="col-start-1 col-span-1">
                                            <div class="circulo">
                                                <p className="inicial">A</p>
                                            </div>
                                        </div>
                                        <div class="col-start-2 col-end-5">
                                            <div className="contenedorTituloLibro">
                                                <div class="line-clamp-2">
                                                    <p class= "tituloLibro"><b>"{libropv1.titulo}"</b></p>
                                                </div>
                                            </div>
                                            <div className="contenedorInfoLibro">
                                                <div class="line-clamp-1">
                                                    <p className="infoLibro">Cantidad restante: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-start-6 col-span-1">
                                            <div class="imagenLibro">
                                                <Image src={libropv1["imagen-portada-url"]} width={80} height={101}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>    
                        </div>
                        <div class="col-start-4 col-span-1">
                        <Link href={libropv2["url-compra"]}>
                                <div class="libro">
                                    <div class="grid grid-cols-6 col-span-1">
                                        <div class="col-start-1 col-span-1">
                                            <div class="circulo">
                                                <p className="inicial">A</p>
                                            </div>
                                        </div>
                                        <div class="col-start-2 col-end-5">
                                            <div className="contenedorTituloLibro">
                                                <div class="line-clamp-2">
                                                    <p class= "tituloLibro"><b>"{libropv2.titulo}"</b></p>
                                                </div>
                                            </div>
                                            <div className="contenedorInfoLibro">
                                                <div class="line-clamp-1">
                                                    <p className="infoLibro">Cantidad restante: 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-start-6 col-span-1">
                                            <div class="imagenLibro">
                                                <Image src={libropv2["imagen-portada-url"]} width={80} height={101}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>    
                        </div>  
                    </div>
                </div>

            </div>
            )}
        </>
    }
    ></Layout>
    )
}

export default Index