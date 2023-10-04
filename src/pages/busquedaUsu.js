import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import React, { useState } from 'react'
import libreria from '../json/libreria.json'


const busqueda = () => {
    const [palabraclave, setPalabraclave] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
    
        // Inicializa results con la lista completa de libros
        let results = libreria;
    
        // Filtrar por campos seleccionados en los checkboxes
        selectedFilters.forEach((filter) => {
            switch (filter) {
                case "titulo":
                    results = results.filter((book) =>
                        book.titulo.toLowerCase().includes(palabraclave.toLowerCase())
                    );
                    break;
                case "isbn":
                    results = results.filter((book) =>
                        book.isbn.toLowerCase().includes(palabraclave.toLowerCase())
                    );
                    break;
                case "autor":
                    results = results.filter((book) =>
                        book.autor.toLowerCase().includes(palabraclave.toLowerCase())
                    );
                    break;
                // Agrega más casos para otros filtros si es necesario
                default:
                    break;
            }
        });
    
        // Actualiza el estado de los resultados
        setSearchResults(results);
    };
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            // Agregar el campo seleccionado a la lista de filtros
            setSelectedFilters([...selectedFilters, value]);
        } else {
            // Eliminar el campo seleccionado de la lista de filtros
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
        }
    };

    return (<Layout content={
        <>
            <Head>
                <title>Busqueda</title>
            </Head>


            <div id="form_perfil">

                <div class="bg-white p-6 rounded-md shadow-md w-11/12 h-full">
                    <h1 class="text-2xl font-semibold mb-4">Búsqueda</h1>

                    <div class="bg-purple-bg py-4 px-4">
                        <form class="flex" onSubmit={handleSearch}>

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
                                    <p class="text-gray-700 text-sm text-purple-primary font-bold">Incluir busqueda en:</p>
                                    <div class="space-y-2">
                                        <label class="flex items-center">
                                            <input type="checkbox" name="filter1" value="titulo" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                            <span class="ml-2 text-purple-primary font-bold">Titulo</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="checkbox" name="filter2" value="autor" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                            <span class="ml-2 text-purple-primary font-bold">Autor, Autores</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="checkbox" name="filter3" value="serie" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                            <span class="ml-2 text-purple-primary font-bold">Serie</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="checkbox" name="filter4" value="isbn" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                            <span class="ml-2 text-purple-primary font-bold">ISBN</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right space-x-2 ">
                                <button type="reset" class="bg-purple-bg text-purple-primary px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Limpiar</button>
                                <button type="submit" class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border-2 border-purple-primary rounded-full">Buscar</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <div>
                {/* Mostrar los resultados */}
                {searchResults.map((result) => (
                    <div key={result.id}>
                        <h2>{result.titulo}</h2>
                        {/* Mostrar otros detalles del libro aquí */}
                    </div>
                ))}
            </div>

        </>
    }
    ></Layout>)
}
export default busqueda