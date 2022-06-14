import React from 'react'
import { useState, useEffect } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui/';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';


const Favorites = () => {

    const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);

    useEffect(() => {
        setfavoritePokemon(localFavorites.pokemons);
    }, [])


    return (
        <Layout title='Pokemons - Favoritos'>
            {
                favoritePokemon.length === 0
                    ? (<NoFavorites />)
                    : (<FavoritePokemons pokemons={favoritePokemon} />)
            }


        </Layout >
    )
}

export default Favorites