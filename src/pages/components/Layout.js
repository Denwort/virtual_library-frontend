import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useMiProvider} from '../context/contexto'
import {useRouter} from 'next/router'

export default props => {

    const router = useRouter()

    const [cuenta, setCuenta] = useMiProvider()
    let titulo = ''
    let segundo_link_href = ''
    let tercer_link_titulo = ''
    let tercer_link_href = ''
    let foto_src = ''
    let foto_href = ''

    if (cuenta.tipo == 'admin') {
        titulo = 'Administracion de bibliotecas'
        tercer_link_titulo = 'Bibliotecas'
        tercer_link_href = '/busqueda'
        foto_src = cuenta.foto
        foto_href = '/perfilDatos'
    }
    else if (cuenta.tipo == 'user') {
        titulo = 'Sistema de bibliotecas'
        tercer_link_titulo = 'Prestamos'
        tercer_link_href = '/busqueda'
        foto_src = cuenta.foto
        foto_href = '/perfilDatosUsu'
    }
    else { // Sin haberse logeado (invitado)
        titulo = 'Biblioteca'
        tercer_link_titulo = 'Bibliotecas'
        tercer_link_href = '/busqueda'
        foto_src = '/boton_perfil.png'
        foto_href = '/login'
    }

    return (
    <>
        <div id='todo'>
            <header class="bg-purple-header">
                <div class="flex p-8">
                    <button class="" onClick={toggleNav}>
                        <div class="w-48px h-48px items-center justify-center gap-10">
                            <Image src="/boton_nav.png" width={24} height={24} alt='imagen de nav'></Image>
                        </div>
                    </button>
                </div>
                
                <p id="titulo">{titulo}</p>

                <div class="flex p-8">
                    <Link class="" href={foto_href}>
                        <div class="w-48px h-48px items-center justify-center gap-10">
                            <Image src={foto_src} width={24} height={24} alt='imagen de perfil'></Image>
                        </div>  
                    </Link>
                </div>
            </header>

            <nav id="nav">
                <ul>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href={foto_href}>Perfil</Link></li>
                    <li><Link href={tercer_link_href}>{tercer_link_titulo}</Link></li>
                </ul>
            </nav>



            <main>
                {props.content}
            </main>
            
            <footer id="footer">
                <p>Biblio v1.01-alpha</p>
            </footer>
        </div>
        </>
    )
}

function toggleNav(){
    let navUl = document.getElementById("nav")
    let foot = document.getElementById("footer")
    console.log(navUl.style.display)
    if(navUl.style.display=="block" || navUl.style.display==""){
        navUl.style.display="none";
        foot.style.display="none";
    }else{
        navUl.style.display="block";
        foot.style.display="block";
    }
    console.log(navUl.style.display)
}
