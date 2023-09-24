import Link from "next/link"
import Head from 'next/head'

const Index = () => <Layout content={
    <>
        <Head>
            <title>..:: Pagina1 ::..</title>
        </Head>
        <div>
            <h1>Home Page o Welcome Page</h1>
            <Link href="listar">Listar los pokemones</Link>
        </div>
    </>
}

></Layout>

export default Index


