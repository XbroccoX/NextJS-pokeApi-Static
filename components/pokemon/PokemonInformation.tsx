import { Grid, Card, Image, Text, Button, Container } from '@nextui-org/react';
import { FC, useState, useEffect } from 'react';
import { Pokemon } from "../../interfaces"
import { localFavorites } from '../../utils';
import confetti from 'canvas-confetti'

interface Props {
    pokemon: Pokemon
}

export const PokemonInformation: FC<Props> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState(false);

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorites(localFavorites.existInFavorites(pokemon.id))

        if (isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })


    }

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
    }, [pokemon.id])





    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4}>
                <Card isHoverable css={{ padding: '30px' }}>
                    <Card.Body>
                        <Image
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height="200px"
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card css={{ padding: '5px' }}>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Text transform='capitalize' h1>{pokemon.name}</Text>
                        <Button
                            color="gradient"
                            ghost={!isInFavorites}
                            onPress={onToggleFavorite}
                        >
                            {
                                isInFavorites ? 'En favoritos' : 'Guardar en favoritos'
                            }
                        </Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container display='flex' direction='row' gap={0}>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>

                    </Card.Body>
                </Card>
            </Grid>

        </Grid.Container>
    )
}
