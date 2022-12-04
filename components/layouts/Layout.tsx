import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui/Navbar';
import { Navbarborrar } from '../ui';


interface Props {
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

    console.log(origin)


    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name='author' content='XbroccoX' />
                <meta name='description' content={`información sobre el pokémon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/images/banner.png`} />
            </Head>

            {/* <Navbar /> */}
            <Navbarborrar />


            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}
