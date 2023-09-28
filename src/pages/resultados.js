import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'


const busqueda = () => <Layout content={
<>
    <Head>
        <title>Busqueda</title>
    </Head>

    <div class="flex justify-between">
        <h1 class="text-2xl font-semibold mb-4">Búsqueda</h1>
        <button type="submit" class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Volver a buscar</button>
    </div>

    <Image src="/divider.png" width={1088} height={1} class="py-4"></Image>

    <div class="flex justify-between">
        <h1 class="text-1xl font-semibold mb-4">Resultados de la busqueda</h1>
        <button type="submit" class="bg-purple-bg text-purple-primary px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Ver mis reservas</button>
    </div>
    
    <div class="bg-white p-6 rounded-md shadow-md w-12/12 h-full flex">

        <div class="bg-purple-bg py-4 px-4 w-96 h-96 rounded-lg ">
            <div>
                <p class="bg-purple-bg text-purple-primary">PP</p>
            </div>
        </div>
    
        
    </div>

</>
}
></Layout>
export default busqueda