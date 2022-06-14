import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts/Layout';
import { PokemonInformation } from '../../components/pokemon/PokemonInformation';
import { Pokemon } from '../../interfaces/pokemon-full';
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <PokemonInformation pokemon={pokemon} />
        </Layout>
    )
}
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get('/pokemon?limit=151');

    const pokemonNames: string[] = data.results.map((pokemon: any) => pokemon.name)

    return {
        paths: pokemonNames.map(name => ({
            params: { name }
        })),

        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }


    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}

export default PokemonByNamePage