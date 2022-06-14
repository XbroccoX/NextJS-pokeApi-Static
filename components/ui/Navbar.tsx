import NextLink from 'next/link'
import { Link, Text, Spacer, Image, useTheme } from "@nextui-org/react"
import { ActiveLink } from './ActiveLink';

export const Navbar = () => {

    const { theme } = useTheme()


    return (
        <nav style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 10px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt="Icono de la App"
                width={70}
                height={50}
            />
            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h1>P</Text>
                    <Text color="white" h2>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: '1' }} />

            <NextLink href="/favorites" passHref>
                <Link css={{ marginRight: '10px' }}>
                    <Text>Favoritos</Text>
                </Link>
            </NextLink>



        </nav>
    )
}
