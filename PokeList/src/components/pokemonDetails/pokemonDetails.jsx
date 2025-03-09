/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "../container/container";
import { Image } from "../Image/image";
import { Slider } from "../slider/slider";
import { Text } from "../text/text";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { postTrainPokemon, getPokemonImage } from "../../core/http/http";

export const PokemonDetails = ({
    open,
    setOpen,
    pokemonName,
    pokemonImage,
}) => {
    const [epochs, setEpochs] = useState(1);
    const [batchSize, setBatchSize] = useState(1);
    const [learningRate, setLearningRate] = useState(0.01);
    const [optimizer, setOptimizer] = useState("ofensivo");
    const [trainedPokemon, setTrainedPokemon] = useState("");
    const [trainedPokemonImage, setTrainedPokemonImage] = useState("");
    const [trainedPokemonName, setTrainedPokemonName] = useState("");

    useEffect(() => {
        const fetchPokemonImage = async () => {
            try {
                if (trainedPokemon?.final_pokemon != pokemonName) {
                    const response = await getPokemonImage(
                        trainedPokemon.final_pokemon
                    );

                    console.log(response);

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
        postTrainPokemon(
            pokemonName,
            epochs,
            batchSize,
            learningRate,
            optimizer
        ).then((response) => setTrainedPokemon(response.data));
    };

    console.log(trainedPokemonImage);
    console.log(trainedPokemonName);

    console.log(trainedPokemon);

    return (
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
                onClick={() => setOpen(false)}
            ></Container>
            <Container
                $w="80%"
                $h="80%"
                $display={open ? "grid" : "none"}
                $gridTemplateColumns="repeat(3, 1fr)"
                $gridTemplateRows="repeat(7, 1fr)"
                $backgroundColor="#99CCFF"
                $position="absolute"
                $alignSelf="center"
                $top="10%"
                $left="10%"
                $borderRadius="2rem"
            >
                <Container
                    $w="100%"
                    $h="100%"
                    $display="flex"
                    $justifyContent="center"
                    $alignItems="center"
                    $borderRadius="2rem 2rem 0 0"
                    $gridColumn={"span 3 / span 3"}
                    $backgroundColor="#c0000f"
                >
                    <Text
                        $fontSize="2.5rem"
                        $fontWeight="bold"
                        $fontColor="white"
                    >
                        Train Your Pokemon
                    </Text>
                </Container>

                <Container
                    $w="100%"
                    $h="100%"
                    $gridRow={"span 3 / span 3"}
                    $gridRowStart={"2"}
                    $justifyContent="center"
                    $alignItems="center"
                    $display="flex"
                    $flexDirection="column"
                    $borderTop="1px solid black"
                >
                    <Text $fontSize="2rem" $fontWeight="bold">
                        {pokemonName.charAt(0).toUpperCase() +
                            pokemonName.slice(1)}
                    </Text>

                    <Image
                        $w="fit-content"
                        $h="75%"
                        src={pokemonImage}
                        $imageRendering="pixelated"
                        $borderRadius="10%"
                        $border="2px solid black"
                        $m="1rem 0 0 0"
                        $backgroundColor="#E0E0E0"
                    />
                </Container>

                <Container
                    $w="100%"
                    $h="100%"
                    $gridRow={"span 3 / span 3"}
                    $gridRowStart={"2"}
                    $gridColumn={"span 2 / span 2"}
                    $display="flex"
                    $flexDirection="column"
                    $justifyContent="center"
                    $alignItems="center"
                    $borderTop="1px solid black"
                    $borderLeft="1px solid black"
                >
                    <Text
                        $fontSize="1.5rem"
                        $fontWeight="500"
                        $p="0.5rem 0 0.5rem 0"
                    >
                        Choose how your pokemon will be trained
                    </Text>

                    <Container
                        $w="100%"
                        $h="100%"
                        $display="flex"
                        $flexDirection="row"
                    >
                        <Container
                            $w="50%"
                            $h="100%"
                            $p="1rem"
                            $gap="3rem"
                            $display="flex"
                            $flexDirection="column"
                            $justifyContent="center"
                        >
                            <Container>
                                <Text $fontSize="1.3rem" $p="0 0 1rem 0">
                                    How many training rounds will the Pokémon
                                    face?
                                </Text>

                                <Container
                                    $display="flex"
                                    $justifyContent="center"
                                    $alignItems="center"
                                    $w="100%"
                                >
                                    <Text $fontSize="1.5rem" $p="0 0.5rem 0 0">
                                        1
                                    </Text>
                                    <Slider
                                        type="range"
                                        min="1"
                                        max="50"
                                        value={epochs}
                                        onChange={(e) =>
                                            setEpochs(e.target.value)
                                        }
                                        $p="0 2rem"
                                    />
                                    <Text $fontSize="1.5rem" $p="0 0 0 0.5rem">
                                        50
                                    </Text>

                                    <Input
                                        $w="4rem"
                                        $h="2rem"
                                        $fontSize="1.5rem"
                                        $border="1px solid black"
                                        $p="0.5rem"
                                        $borderRadius="0.5rem"
                                        $m="0 0 0 1rem"
                                        type="number"
                                        min="1"
                                        max="50"
                                        value={epochs}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setEpochs(
                                                value === ""
                                                    ? ""
                                                    : Math.max(
                                                          1,
                                                          Math.min(
                                                              50,
                                                              Number(value)
                                                          )
                                                      )
                                            );
                                        }}
                                        onBlur={() => {
                                            if (!epochs) setEpochs(1);
                                        }}
                                        required
                                    />
                                </Container>
                            </Container>

                            <Container>
                                <Text $fontSize="1.3rem" $p="0 0 1rem 0">
                                    How many battles occur per round?
                                </Text>

                                <Container
                                    $display="flex"
                                    $justifyContent="center"
                                    $alignItems="center"
                                    $w="100%"
                                >
                                    <Text $fontSize="1.5rem" $p="0 0.5rem 0 0">
                                        1
                                    </Text>
                                    <Slider
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={batchSize}
                                        onChange={(e) =>
                                            setBatchSize(e.target.value)
                                        }
                                    />
                                    <Text $fontSize="1.5rem" $p="0 0 0 0.5rem">
                                        10
                                    </Text>

                                    <Input
                                        $w="4rem"
                                        $h="2rem"
                                        $fontSize="1.5rem"
                                        $border="1px solid black"
                                        $p="0.5rem"
                                        $borderRadius="0.5rem"
                                        $m="0 0 0 1rem"
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={batchSize}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setBatchSize(
                                                value === ""
                                                    ? ""
                                                    : Math.max(
                                                          1,
                                                          Math.min(
                                                              10,
                                                              Number(value)
                                                          )
                                                      )
                                            );
                                        }}
                                        onBlur={() => {
                                            if (!batchSize) setBatchSize(1);
                                        }}
                                        required
                                    />
                                </Container>
                            </Container>
                        </Container>

                        <Container
                            $w="50%"
                            $h="100%"
                            $p="1rem"
                            $gap="3rem"
                            $display="flex"
                            $flexDirection="column"
                            $justifyContent="center"
                        >
                            <Container>
                                <Text $fontSize="1.3rem" $p="0 0 2.5rem 0">
                                    How much XP is gained per battle?
                                </Text>

                                <Container
                                    $display="flex"
                                    $justifyContent="center"
                                    $alignItems="center"
                                    $w="100%"
                                >
                                    <Text $fontSize="1.5rem" $p="0 0.5rem 0 0">
                                        0.01
                                    </Text>
                                    <Slider
                                        type="range"
                                        min="0.01"
                                        max="1"
                                        step="0.01"
                                        value={learningRate}
                                        onChange={(e) =>
                                            setLearningRate(
                                                Number(e.target.value)
                                            )
                                        }
                                        $p="0 2rem"
                                    />
                                    <Text $fontSize="1.5rem" $p="0 0 0 0.5rem">
                                        1
                                    </Text>

                                    <Input
                                        $w="5.2rem"
                                        $h="2rem"
                                        $fontSize="1.5rem"
                                        $border="1px solid black"
                                        $p="0.5rem"
                                        $borderRadius="0.5rem"
                                        $m="0 0 0 1rem"
                                        type="number"
                                        min="0.01"
                                        max="1"
                                        step="0.01"
                                        value={learningRate}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setLearningRate(
                                                value === ""
                                                    ? ""
                                                    : Math.max(
                                                          0.01,
                                                          Math.min(
                                                              1,
                                                              Number(value)
                                                          )
                                                      )
                                            );
                                        }}
                                        onBlur={() => {
                                            if (!learningRate)
                                                setLearningRate(0.01);
                                        }}
                                        required
                                    />
                                </Container>
                            </Container>

                            <Container>
                                <Text $fontSize="1.3rem" $p="0 0 1rem 0">
                                    What is the training strategy?
                                </Text>

                                <Container
                                    $display="flex"
                                    $justifyContent="center"
                                    $alignItems="center"
                                    $w="100%"
                                >
                                    <select
                                        style={{
                                            width: "50%",
                                            height: "2rem",
                                            fontSize: "1.5rem",
                                            borderRadius: "0.5rem",
                                        }}
                                        value={optimizer}
                                        onChange={(e) =>
                                            setOptimizer(e.target.value)
                                        }
                                    >
                                        <option value="ofensivo">
                                            ofensivo
                                        </option>
                                        <option value="defensivo">
                                            defensivo
                                        </option>
                                        <option value="balanceado">
                                            balanceado
                                        </option>
                                    </select>

                                    <input
                                        type="radio"
                                        value="ofensivo"
                                        checked={optimizer === "ofensivo"}
                                        onChange={(e) =>
                                            setOptimizer(e.target.value)
                                        }
                                    />
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Button
                        $fontSize={"1.3rem"}
                        $borderRadius={"2rem"}
                        $bgColor={"#F1191F"}
                        $hoverBackgroundColor={"#F16868"}
                        $fontColor={"white"}
                        $border={"none"}
                        $text="Start Training"
                        $p={"0.5rem 1rem"}
                        onClick={() => handleStartTraining()}
                    />
                </Container>

                <Container
                    $w="100%"
                    $h="100%"
                    $gridRow={"span 3 / span 3"}
                    $gridRowStart={"5"}
                    $borderRadius="0 0 0 2rem"
                    $justifyContent="center"
                    $alignItems="center"
                    $display="flex"
                    $flexDirection="column"
                >
                    <Text $fontSize="2rem" $fontWeight="bold">
                        {trainedPokemonName}
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
                </Container>

                <Container
                    $w="100%"
                    $h="100%"
                    $gridRow={"span 3 / span 3"}
                    $gridRowStart={"5"}
                    $gridColumn={"span 2 / span 2"}
                    $borderRadius="0 0 2rem 0"
                    $borderLeft="1px solid black"
                >
                    <Text $fontSize="2rem" $fontWeight="bold">
                        {pokemonName}
                    </Text>
                    <Image $w="100%" $h="100%" src={pokemonImage} />
                </Container>
            </Container>
        </>
    );
};
