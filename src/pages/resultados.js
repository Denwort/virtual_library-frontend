import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto'

const busqueda = () => 
{
    const [cuenta, setCuenta] = useMiProvider()
    
    let boton_texto = ''
    let boton_href = ''
    let boton_disabled = ''
    if (cuenta.tipo == 'admin') {
        boton_texto = 'Modificar'
        boton_href = '/modificar'
        boton_disabled = false
    }
    else if (cuenta.tipo == 'user') {
        boton_texto = 'Reservar'
        boton_href = '/reservar'
        boton_disabled = false
    }
    else { // Sin haberse logeado (invitado)
        boton_texto = 'Reservar'
        boton_href = '/login'
        boton_disabled = true
    }

    return (
        <Layout content={
        <>
            <Head>
                <title>Busqueda</title>
            </Head>

            <div class="flex justify-between">
                <h1 class="text-2xl font-semibold mb-4">Búsqueda</h1>
                <button type="button" class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Volver a buscar</button>
            </div>

            <Image src="/divider.png" width={1088} height={1} class="py-4"></Image>

            <div class="flex justify-between">
                <h1 class="text-1xl font-semibold mb-4">Resultados de la busqueda</h1>
                <button type="button" class="bg-purple-bg text-purple-primary px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Ver mis reservas</button>
            </div>
            
            <div class="flex flex-wrap shrink-0 gap-3 bg-white p-6 rounded-md shadow-md w-12/12 h-full justify-center">

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-bg text-purple-primary border-2 border-purple-header px-4 py-2 hover:bg-blue-600  rounded-full">{boton_texto}</button>
                    </div>
                </div>

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>
                
                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>

                <div class="w-80 h-96 border-2 border-gray-400 rounded-lg">
                    <div class="h-10 flex justify-between items-center m-4">
                        <div class="w-10 h-10 inline-flex bg-purple-primary text-purple-bg justify-center items-center text-center rounded-full">PP</div>
                        <div class="w-60 pl-2 text-purple-primary text-left items-center align-middle">Clean Code Code Code Code Code Code Code Code Code</div>
                    </div>
                    <div class="flex bg-purple-bg mx-auto justify-center items-center">
                        <Image src="/imagenLibro.png" height={10000} width={10000} alt="libro_imagen" class="h-36 w-auto" ></Image>
                    </div>
                    <div class="py-2 px-4 text-purple-primary">
                        <div class="font-bold">ISBN: 0932633420</div>
                        <div>Autor: 0932633420</div>
                        <div>Editor: Addison-Wesley</div>
                    </div>
                    <div class="h-14 flex justify-center items-center">
                        <button type="button" disabled={boton_disabled} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">{boton_texto}</button>
                    </div>
                </div>
                
                
                
            </div>

        </>
        }
        ></Layout>
    )
}
export default busqueda