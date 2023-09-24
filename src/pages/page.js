import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'

const Index = () => <Layout content={
    <>
        <Head>
            <title>..:: Pagina1 ::..</title>
        </Head>

        <div>
            <p>Bienvenido, Juan!</p>
            <Image src="/divider.png" width={1088} height={1}></Image>
        </div>

        <div>
            <h1>Ultimas reservas</h1>
            <Link href="">Clean Code</Link>
            <Link href="">Introduction to the theory...</Link>
        </div>
    </>
}

></Layout>

export default Index


