import '../styles/style_layout.css'
import '../styles/style_login.css'
import '../styles/style_perfiles.css'
import '../styles/style_registroUsuario.css'
import '../styles/style_page.css'
import '../styles/globals.css'
import '../styles/style_detalleLibro.css'
import '../styles/modal.css'
import '../styles/style_agregarLibroadm.css'

import { AppProps } from 'next/app'

export default function MyApp( {Component, pageProps}) {
    return <Component { ...pageProps} />
}