/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { postTrainPokemon, getPokemonImage } from "@core/http/http";
import ReactDOM from "react-dom";
import { Container, Text, Image } from "@shared/components/index";
import { TrainingParameters } from "./components/trainingParameters/trainingParameters";
import { TrainingResults } from "./components/trainingResults/trainingResults";
import { TrainingEvolution } from "./components/trainingEvolution/trainingEvolution";
import { capitalizeName, getRandomBackgroundImage } from "@shared/utils/index";

export const PokemonDetails = ({
    open,
    setOpen,
    pokemonName,
    pokemonImage,
}) => {
    const [loading, setLoading] = useState(false);
    const [epochs, setEpochs] = useState(1);
    const [batchSize, setBatchSize] = useState(1);
    const [learningRate, setLearningRate] = useState(0.01);
    const [optimizer, setOptimizer] = useState("ofensivo");
    const [trainedPokemon, setTrainedPokemon] = useState("");
    const [trainedPokemonImage, setTrainedPokemonImage] = useState("");
    const [trainedPokemonName, setTrainedPokemonName] = useState("");
    const [totalBattles, setTotalBattles] = useState(0);
    const [totalXp, setTotalXp] = useState(0);
    const [portraitBackground, setPortraitBackground] = useState("");

    useEffect(() => {
        const fetchPokemonImage = async () => {
            try {
                if (trainedPokemon?.final_pokemon != pokemonName) {
                    const response = await getPokemonImage(
                        trainedPokemon.final_pokemon
                    );
                    setTrainedPokemonImage(response.image_base64);
                    setTrainedPokemonName(response.pokemon);
                }
            } catch (error) {
                console.error("Error fetching Pokemon image:", error);
            }
        };

        if (trainedPokemon) {
            fetchPokemonImage();
        }
    }, [trainedPokemon]);
    
    const handleStartTraining = () => {
        setLoading(true);
        postTrainPokemon(
            pokemonName,
            epochs,
            batchSize,
            learningRate,
            optimizer
        )
            .then((response) => setTrainedPokemon(response.data))
            .finally(() => {
                setLoading(false);
            });
    };

    const handleCloseDetails = () => {
        setOpen(false);
        setTrainedPokemon("");
        setTrainedPokemonImage("");
        setTrainedPokemonName("");
        setEpochs(1);
        setBatchSize(1);
        setLearningRate(0.01);
        setOptimizer("ofensivo");
        setTotalBattles(0);
        setTotalXp(0);
        setPortraitBackground("");
    };

    useEffect(() => {
        setPortraitBackground(getRandomBackgroundImage());
    }, [open]);

    return ReactDOM.createPortal(
        <>
            <Container
                $w="100%"
                $h="100%"
                $position="absolute"
                $top="0"
                $left="0"
                $display={open ? "flex" : "none"}
                $backgroundColor="rgba(0, 0, 0, 0.5)"
                $justifyContent="center"
                $alignItems="center"
                onClick={() => handleCloseDetails()}
            ></Container>
            <Container
                $w="90%"
                $h="90%"
                $display={open ? "grid" : "none"}
                $gridTemplateColumns="repeat(3, 1fr)"
                $gridTemplateRows="repeat(7, 1fr)"
                $position="absolute"
                $alignSelf="center"
                $top="5%"
                $left="5%"
                $borderRadius="2rem"
                $justifyContent="center"
                $alignItems="center"
                $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1), inset -2px -2px 0px 0px rgba(0, 0, 0, 0.2), inset -4px -4px 20px 2px rgba(0, 0, 0, 0.5), 10px 10px 15px 0px rgba(0, 0, 0, 0.5)"
                $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, transparent 100%)rgba(255, 255, 255, 0.5)"
                $backdropFilter="blur(5px)"
            >
                <Container
                    $w="100%"
                    $h="100%"
                    $display="flex"
                    $justifyContent="center"
                    $alignItems="center"
                    $borderRadius="2rem 2rem 0 0"
                    $gridColumn={"span 3 / span 3"}
                    $position="relative"
                >
                    <Text
                        $fontSize="2.5rem"
                        $fontWeight="bold"
                        $fontColor="black"
                    >
                        Train Your Pokemon
                    </Text>

                    <Text
                        $fontSize="2.5rem"
                        $fontWeight="bold"
                        $position="absolute"
                        $top="15px"
                        $right="25px"
                        $fontColor="black"
                        $cursor="pointer"
                        onClick={() => handleCloseDetails()}
                    >
                        X
                    </Text>
                </Container>

                <Container
                    $w="90%"
                    $h="95%"
                    $gridRow={"span 3 / span 3"}
                    $gridRowStart={"2"}
                    $justifyContent="center"
                    $alignItems="center"
                    $display="flex"
                    $flexDirection="column"
                    $justifySelf="center"
                    $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, transparent 100%)rgba(255, 255, 255, 0.5)"
                    $borderRadius="1rem"
                    $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1),  3px 3px 5px 0px rgba(0, 0, 0, 0.5)"
                >
                    <Text $fontSize="1.5rem" $fontWeight="bold">
                        {capitalizeName(pokemonName)}
                    </Text>

                    <Image
                        $w="fit-content"
                        $h="75%"
                        src={pokemonImage}
                        $imageRendering="pixelated"
                        $borderRadius="10%"
                        $border="2px solid black"
                        $m="1rem 0 0 0"
                        $backgroundImage={`url(${portraitBackground})`}
                        $backgroundSize="cover"
                        $backgroundRepeat="no-repeat"
                        $backgroundPosition="center"
                    />
                </Container>

                <TrainingParameters
                    epochs={epochs}
                    setEpochs={setEpochs}
                    batchSize={batchSize}
                    setBatchSize={setBatchSize}
                    learningRate={learningRate}
                    setLearningRate={setLearningRate}
                    optimizer={optimizer}
                    setOptimizer={setOptimizer}
                    handleStartTraining={handleStartTraining}
                />

                <TrainingEvolution
                    loading={loading}
                    trainedPokemon={trainedPokemon}
                    pokemonName={pokemonName}
                    trainedPokemonName={trainedPokemonName}
                    trainedPokemonImage={trainedPokemonImage}
                    totalXp={totalXp}
                    portraitBackground={portraitBackground}
                />

                <TrainingResults
                    loading={loading}
                    trainedPokemonData={trainedPokemon}
                    totalBattles={totalBattles}
                    setTotalBattles={setTotalBattles}
                    totalXp={totalXp}
                    setTotalXp={setTotalXp}
                />

            </Container>
        </>,
        document.getElementById("modal-root")
    );
};
