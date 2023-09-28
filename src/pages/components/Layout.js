import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default props => (
<>
    <div id='todo'>
        <header class="bg-purple-header">
            <div class="flex p-8">
                <div class="">
                    <div class="w-48px h-48px items-center justify-center gap-10">
                        <Image src="/boton_nav.png" width={24} height={24} alt='imagen de nav'></Image>
                        <image class="w-full h-max" src="/."></image>
                    </div>
                </div>
            </div>
            
            <p id="titulo">Administracion de bibliotecas</p>

            <div class="flex p-8">
                <div class="">
                    <div class="w-48px h-48px items-center justify-center gap-10">
                        <Image src="/boton_perfil.png" width={24} height={24} alt='imagen de perfil'></Image>
                        <image class="" src="/."></image>
                    </div>  
                </div>
            </div>
        </header>

        <nav>
            <ul>
                <li><Link href="/page">Inicio</Link></li>
                <li><Link href="/perfil1">Perfil</Link></li>
                <li><Link href="/bibliotecas">Bibliotecas</Link></li>
                <li><Link href="/busqueda">Busqueda</Link></li>
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