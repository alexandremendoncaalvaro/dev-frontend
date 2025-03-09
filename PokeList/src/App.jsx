import { Container } from "./components/container/container";
import { PokemonList } from "./components/pokemonList/pokemonList";
import { Text } from "./components/text/text";

function App() {
    return (
        <Container $h="100%" $w="100%">
            <Container
                $h="10%"
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
            >
                <Text $fontSize="4rem" $fontWeight="bold">
                    PokeList
                </Text>
            </Container>

            <Container
                $h="15%"
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
            >
                <Text $fontSize="1.5rem" $fontWeight="bold">
                    Search by Name
                </Text>
            </Container>

            <Container
                $w="100%"
                $display="flex"
                $justifyContent="center"
                $overflow="hidden"
                $backgroundColor="cyan"
                $flexWrap="wrap"
                $h="75%"
            >
                <PokemonList  />

            </Container>
        </Container>
    );
}

export default App;
