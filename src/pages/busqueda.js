import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto.js'
import { useRouter } from 'next/router'


const busqueda = () => {

    const router = useRouter()

    return (
        <Layout content={
            <>
                <Head>
                    <title>Busqueda</title>
                </Head>



                <div id="form_perfil">

                    <div class="bg-white p-6 rounded-md shadow-md w-12/12 h-full">
                        <div class="flex justify-between gap-4 mb-4">
                            <h1 class="text-2xl font-semibold">Búsqueda</h1>
                            <Link type="button" href="/agregarLibroAdm" class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Agregar un nuevo recurso</Link>
                        </div>
                        <div class="bg-purple-bg py-4 px-4">
                            <form class="flex" onSubmit={(e)=>{e.preventDefault()}}>

                                <div class="w-1/2 mr-4 space-y-4 m-3 ">

                                    <div id="text_field_b1 relative">
                                        <div class="text_field">
                                            <div class="state_layer">
                                                <div class="content">
                                                    <div id="text_usuario">
                                                        <p>ingresa la palabra clave</p>
                                                    </div>
                                                    <div id="input_text_usuario">
                                                        <input type='text' placeholder='' id="inputUsu" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="supporting-text relative">
                                            <p></p>
                                        </div>

                                    </div>

                                    <div id="text_field_b2">
                                        <div class="text_field">
                                            <div class="state_layer">
                                                <div class="content">
                                                    <div id="text_usuario">
                                                        <p>Tipo de Recurso</p>
                                                    </div>
                                                    <div id="input_text_usuario">
                                                        <input type='text' placeholder='' id="inputUsu" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="supporting-text">
                                            <p></p>
                                        </div>

                                    </div>

                                </div>



                                <div class="w-1/2">
                                    <div class="mb-4">
                                        <p class="text-gray-700 text-sm text-purple-primary font-bold">Incluir en busqueda:</p>
                                        <div class="space-y-2">
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter1" class="form-checkbox text-purple-primary border-purple-primary"></input>
                                                <span class="ml-2 text-purple-primary font-bold">Titulo</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter2" class="form-checkbox text-purple-primary border-purple-primary"></input>
                                                <span class="ml-2 text-purple-primary font-bold">Autor, Autores</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter3" class="form-checkbox text-purple-primary border-purple-primary"></input>
                                                <span class="ml-2 text-purple-primary font-bold">Serie</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter4" class="form-checkbox text-purple-primary border-purple-primary"></input>
                                                <span class="ml-2 text-purple-primary font-bold">ISBN</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right space-x-2 ">
                                    <button type="submit" class="bg-purple-bg text-purple-primary px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Limpiar</button>
                                    <button type="submit" class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full"
                                        onClick={() => {
                                            router.push('/resultados')
                                        }}
                                    >Buscar</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </>
        }
        ></Layout>
    )
}

export default busqueda