import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useMiProvider} from '../context/contexto'

export default props => {

    const [estado, setEstado] = useMiProvider()
    let titulo = ''
    let tercer_link_titulo = ''
    let tercer_link_href = ''

    if (estado == 'admin') {
        titulo = 'Administracion de bibliotecas'
        tercer_link_titulo = 'Bibliotecas'
        tercer_link_href = '/busqueda'
    }
    else if (estado == 'user') {
        titulo = 'Sistema de bibliotecas'
        tercer_link_titulo = 'Prestamos'
        tercer_link_href = '/busqueda'
    }

    return (
    <>
        <div id='todo'>
            <header class="bg-purple-header">
                <div class="flex p-8">
                    <div class="">
                        <div class="w-48px h-48px items-center justify-center gap-10">
                            <Image src="/boton_nav.png" width={24} height={24} alt='imagen de nav'></Image>
                        </div>
                    </div>
                </div>
                
                <p id="titulo">{titulo}</p>

                <div class="flex p-8">
                    <div class="">
                        <div class="w-48px h-48px items-center justify-center gap-10">
                            <Image src="/boton_perfil.png" width={24} height={24} alt='imagen de perfil'></Image>
                        </div>  
                    </div>
                </div>
            </header>

            <nav>
                <ul>
                    <li><Link href="/page">Inicio</Link></li>
                    <li><Link href="/perfilDatos">Perfil</Link></li>
                    <li><Link href={tercer_link_href}>{tercer_link_titulo}</Link></li>
                </ul>
            </nav>



            <main>
                {props.content}
            </main>
            
            <footer>
                <p>Biblio v1.01-alpha</p>
            </footer>
        </div>
        </>
    )
}