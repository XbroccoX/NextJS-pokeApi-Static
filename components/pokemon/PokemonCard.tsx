import { useRouter } from 'next/router';
import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter();


    const onClickCard = () => {
        router.push(`/name/${pokemon.name}`)
    }


    return (
        <Grid xs={6} sm={3} md={2} xl={1} >
            <Card
                isHoverable
                isPressable
                onClick={onClickCard}
            >
                <Card.Body>
                    <Card.Image
                        src={pokemon.img}
                        width='100%'
                        height={140}
                        alt={pokemon.name}
                    />
                </Card.Body>
                <Card.Footer css={{
                    justifyItems: 'flex-start'
                }} >
                    <Row wrap='wrap' justify='space-between' align='center'>
                        <Text css={{
                            color: '$accents7',
                            fontWeight: '$semibold',
                            fontSize: '$sm'
                        }}
                        >#{pokemon.id}</Text>
                        <Text b transform='capitalize'>{pokemon.name}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
