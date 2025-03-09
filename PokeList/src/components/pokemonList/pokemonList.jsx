import { useEffect, useState } from "react";
import { Container } from "../container/container";
import { Text } from "../text/text";
import { getPokemonList } from "../../core/http/http";
import { Image } from "../Image/image";
import { Button } from "../button/button";
import ArrowLeftIcon from "../../assets/Icons/ArrowLeftIcon.svg";
import ArrowRightIcon from "../../assets/Icons/ArrowRightIcon.svg";
import { PokemonDetails } from "../pokemonDetails/pokemonDetails";

export const PokemonList = () => {
    const [openDetails, setOpenDetails] = useState(false);
    const [data, setData] = useState();
    const [pokemonListOffset, setPokemonListOffset] = useState(0);
    const [pokemonListTotal, setPokemonListTotal] = useState(0);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    // const [trainedPokemonImage, setTrainedPokemonImage] = useState("");
    // const [epochs, setEpochs] = useState("1");
    // const [batchSize, setBatchSize] = useState("1");
    // const [learningRate, setLearningRate] = useState("1");
    // const [optimizer, setOptimizer] = useState("ofensivo");
    // const [trainedPokemon, setTrainedPokemon] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPokemonList(pokemonListOffset);
                setData(data);
                setPokemonListTotal(data.count);
                console.log(data);
            } catch (error) {
                console.error("Error fetching Pokemon list:", error);
            }
        };

        fetchData();
    }, [pokemonListOffset]);

    // console.log(openDetails);

    return (
        <>
            <Container
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
                $gap="1rem"
                $flexWrap="wrap"
                $overflow="scroll"
                $backgroundColor="coral"
                $w="100%"
                $h="90%"
                $p="2rem 5rem"
            >
                {data
                    ? data.pokemons.map((data) => (
                          <Container
                              $h="280px"
                              $w="270px"
                              key={data.name}
                              $backgroundColor="#ccc"
                              $borderRadius="1rem"
                              $p="1rem"
                              $display="flex"
                              $flexDirection="column"
                              $alignItems="center"
                              onClick={() => {
                                  setOpenDetails(true);
                                  setPokemonName(data.name);
                                  setPokemonImage(data.image_url);
                              }}
                              $position="relative"
                          >
                              <Image
                                  src={data.image_url}
                                  alt={data.name}
                                  $w="80%"
                                  $h="80%"
                                  $imageRendering="pixelated"
                              />
                              <Text $fontSize="1.5rem">{data.name}</Text>
                          </Container>
                      ))
                    : "Loading..."}

                <Button
                    $position="absolute"
                    $left="1rem"
                    $iconPosition={"left"}
                    $border={"none"}
                    $boxShadow={"none"}
                    $bgColor={"transparent"}
                    $icon={ArrowLeftIcon}
                    $iconStroke={"#ccc"}
                    $iconSizeW={"4rem"}
                    $iconSizeH={"4rem"}
                    $borderRadius={"50%"}
                    $p={"0.5rem"}
                    $hoverBackgroundColor={"#cccccc50"}
                    $display={"flex"}
                    $alignItems={"center"}
                    $justifyContent={"center"}
                    onClick={() => {
                        if (pokemonListOffset - 10 < 0) {
                            const lastOffset =
                                Math.floor(pokemonListTotal / 10) * 10;
                            setPokemonListOffset(lastOffset);
                        } else {
                            setPokemonListOffset(pokemonListOffset - 10);
                        }
                    }}
                />

                <Button
                    $position="absolute"
                    $right="1rem"
                    $iconPosition={"left"}
                    $border={"none"}
                    $boxShadow={"none"}
                    $bgColor={"transparent"}
                    $icon={ArrowRightIcon}
                    $iconStroke={"#ccc"}
                    $iconSizeW={"4rem"}
                    $iconSizeH={"4rem"}
                    $borderRadius={"50%"}
                    $p={"0.5rem"}
                    $hoverBackgroundColor={"#cccccc50"}
                    $display={"flex"}
                    $alignItems={"center"}
                    $justifyContent={"center"}
                    onClick={() => {
                        if (pokemonListOffset + 10 >= pokemonListTotal) {
                            setPokemonListOffset(0); // Reset to start
                        } else {
                            setPokemonListOffset(pokemonListOffset + 10);
                        }
                    }}
                />

            </Container>
            <Container $w="100%" $h="10%" $display="flex" $justifyContent="center" $alignItems="center">
                <Text $fontSize="1.5rem">
                    Page {Math.floor(pokemonListOffset / 10) + 1} of{" "}
                    {Math.ceil(pokemonListTotal / 10)}
                </Text>
            </Container>

            <PokemonDetails open={openDetails} setOpen={setOpenDetails} pokemonName={pokemonName} pokemonImage={pokemonImage}/>


            {/* <Container
                $display={pokemonName ? "flex" : "none"}
                $justifyContent="center"
            >
                <Container
                    $display={pokemonName ? "flex" : "none"}
                    $backgroundColor="#ccc"
                    $flexDirection="column"
                    $h="fit-content"
                    $w="60%"
                    $borderRadius="1rem"
                    $p="1rem"
                    $alignItems="center"
                    $justifyContent="center"
                >
                    <Text $fontSize="4rem">{pokemonName}</Text>
                    <img
                        style={{ width: "50%", height: "50%" }}
                        src={pokemonImage}
                        alt={pokemonName}
                    /> */}

            {/* <Text $fontSize="2rem">Rodadas de Treino</Text>
                    <select onChange={(e) => setEpochs(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <Text $fontSize="2rem">Batalhas por Rodadas</Text>
                    <select onChange={(e) => setBatchSize(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <Text $fontSize="2rem">XP ganho por Rodada</Text>
                    <select onChange={(e) => setLearningRate(e.target.value)}>
                        <option value="0.1">0.1</option>
                        <option value="0.2">0.2</option>
                        <option value="0.3">0.3</option>
                        <option value="0.4">0.4</option>
                        <option value="0.5">0.5</option>
                    </select>

                    <Text $fontSize="2rem">Estrategia de Treino</Text>
                    <select onChange={(e) => setOptimizer(e.target.value)}>
                        <option value="ofensivo">Ofensivo</option>
                        <option value="defensivo">Defensivo</option>
                        <option value="equilibrado">Equilibrado</option>
                    </select>

                    <button onClick={() => trainPokemon()}>Começar Treinamento</button>

                    <Container $display={trainedPokemon ? "flex" : "none"}>
                      <Text>
                        {trainedPokemon ? trainedPokemon.final_pokemon : "Loading..."}
                        <img src={trainedPokemonImage.image_base64} alt="" />
                      </Text>

                    </Container> */}
            {/* </Container> */}
            {/* </Container> */}
        </>
    );
};
