import './styles/all.css'
import './styles/style_login.css'
import './styles/style_perfiles.css'

import { AppProps } from 'next/app'

export default function MyApp( {Component, pageProps}) {
    return <Component { ...pageProps} />
}