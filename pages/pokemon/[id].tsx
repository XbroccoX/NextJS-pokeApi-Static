import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { pokeApi } from '../../api'
import { Layout } from "../../components/layouts"
import { Pokemon } from '../../interfaces'
import { PokemonInformation } from '../../components/pokemon';
import { getPokemonInfo } from '../../utils';
import Image from 'next/image';
import wippie from '../../public/images/WIPPIE.png'
import wippieManual from '../../public/images/Manual_de_Instrucciones.png'

interface Props {
    pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <div style={{ width: '100%' }}>
                <Image src={wippieManual} />
            </div>
            {/* <PokemonInformation pokemon={pokemon} /> */}
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        paths: pokemon151.map(id => ({
            params: { id }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo(id)

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400,
    }
}


export default PokemonPage
