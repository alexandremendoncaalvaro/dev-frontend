/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { Container, Text, Image } from "@shared/components/index";
import { capitalizeName } from "@shared/utils/index";

export const TrainingEvolution = ({
    loading,
    trainedPokemon,
    pokemonName,
    trainedPokemonName,
    trainedPokemonImage,
    totalXp,
}) => {
    const FINAL_XP_LIMIT = 20000;

    console.log(trainedPokemonImage);

    const getEvolutionMessage = () => {
        if (loading) return <CircularProgress />;

        if (!trainedPokemon) {
            return (
                <Text $fontSize="2rem" $fontWeight="bold">
                    Waiting for training
                </Text>
            );
        }

        if (totalXp >= FINAL_XP_LIMIT) {
            return (
                <>
                    <Text $fontSize="1.5rem" $fontWeight="bold">
                        {`${capitalizeName(
                            pokemonName
                        )} reached its final form ${capitalizeName(trainedPokemonName)}`}
                    </Text>
                    {trainedPokemonImage != "" && (
                        <Image
                            $imageRendering="pixelated"
                            $borderRadius="10%"
                            $border="2px solid black"
                            $m="1rem 0 0 0"
                            $backgroundColor="#E0E0E0"
                            $w="fit-content"
                            $h="75%"
                            src={`data:image/png;base64, ${trainedPokemonImage}`}
                        />
                    )}
                </>
            );
        }

        if (trainedPokemon.final_pokemon === pokemonName) {
            return (
                <Text $fontSize="1.5rem" $fontWeight="bold">
                    {`${capitalizeName(
                        pokemonName
                    )} didn't evolve yet, continue training!`}
                </Text>
            );
        }

        if (!trainedPokemonName) {
            return (
                <Text $fontSize="1.5rem" $fontWeight="bold">
                    Loading evolution details...
                </Text>
            );
        }

        return (
            <>
                <Text $fontSize="1.5rem" $fontWeight="bold">
                    {`${capitalizeName(
                        pokemonName
                    )} evolves into ${capitalizeName(trainedPokemonName)}!`}
                </Text>
                <Image
                    $imageRendering="pixelated"
                    $borderRadius="10%"
                    $border="2px solid black"
                    $m="1rem 0 0 0"
                    $backgroundColor="#E0E0E0"
                    $w="fit-content"
                    $h="75%"
                    src={`data:image/png;base64, ${trainedPokemonImage}`}
                />
            </>
        );
    };

    return (
        <Container
            $w="90%"
            $h="95%"
            $gridRow={"span 3 / span 3"}
            $gridRowStart={"5"}
            $display="flex"
            $justifyContent="center"
            $alignItems="center"
            $flexDirection="column"
            $justifySelf="center"
            $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, transparent 100%) rgba(255, 255, 255, 0.5)"
            $borderRadius="1rem"
            $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1),  3px 3px 5px 0px rgba(0, 0, 0, 0.5)"
            $p="0 2rem"
        >
            {getEvolutionMessage()}
        </Container>
    );
};
