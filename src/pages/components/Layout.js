import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default props => (
<>
    <div id='todo'>
        <header>
            <div class="leading_icon">
                <div class="container">
                    <div class="boton">
                        <Image src="/boton_nav.png" width={24} height={24} alt='imagen de nav'></Image>
                    </div>
                </div>
            </div>
            
            <p id="titulo">Administracion de bibliotecas</p>

            <div class="leading_icon">
                <div class="container">
                    <div class="boton">
                        <Image src="/boton_perfil.png" width={24} height={24} alt='imagen de perfil'></Image>
                    </div>  
                </div>
            </div>
            
        </header>

        <nav>
            <ul>
                <li><Link href="/pagina1">Inicio</Link></li>
                <li><Link href="/listar">Perfil</Link></li>
                <li><Link href="/bibliotecas">Bibliotecas</Link></li>
            </ul>
        </nav>



        <main>
            {props.content}
        </main>
        
        <footer>
            <div>
                <p>Biblio v1.01-alpha</p>
            </div>
        </footer>
    </div>
    </>
)