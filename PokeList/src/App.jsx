import BackgroundGif from "@assets/Images/PokeTrain-MainPage-background.gif";
import { Container, Text, PokemonList } from "@shared/components/index"

function App() {
    return (
        <Container
            $h="100%"
            $w="100%"
            $backgroundImage={`url(${BackgroundGif})`}
            $backgroundSize="cover"
            $backgroundRepeat="no-repeat"
            $backgroundPosition="center"
            $display="flex"
            $justifyContent="center"
            $alignItems="center"
        >
            <Container
                $h="95%"
                $w="95%"
                $backdropFilter="blur(35px)"
                $backgroundColor="rgba(255, 255, 255, 0.3)"
                $borderRadius="20px"
                $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1), inset -2px -2px 0px 0px rgba(0, 0, 0, 0.2), inset -4px -4px 20px 2px rgba(0, 0, 0, 0.5), 10px 10px 15px 0px rgba(0, 0, 0, 0.5)"
                $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, transparent 100%)rgba(255, 255, 255, 0.2)"
            >
                <Container
                    $h="15%"
                    $display="flex"
                    $justifyContent="center"
                    $alignItems="center"
                >
                    <Text
                        $fontSize="4rem"
                        $fontWeight="bold"
                        $fontFamily="PokeFont, sans-serif"
                        $fontColor="var(--primary-yellow)"
                        $textStrokeColor="var(--primary-blue)"
                        $textStrokeWidth="2px"
                        $letterSpacing="5px"
                    >
                        PokeTrain
                    </Text>
                </Container>

                <Container
                    $h="10%"
                    $display="flex"
                    $justifyContent="center"
                    $alignItems="center"
                    $flexDirection="column"
                >
                    <Text $fontSize="1.5rem" $fontWeight="bold" $fontColor="var(--primary-blue)">
                        Select a Pokemon below to start training!
                    </Text>
                </Container>

                <Container
                    $w="100%"
                    $display="flex"
                    $justifyContent="center"
                    $overflow="hidden"
                    $flexWrap="wrap"
                    $h="75%"
                >
                    <PokemonList />
                </Container>
            </Container>
        </Container>
    );
}

export default App;
