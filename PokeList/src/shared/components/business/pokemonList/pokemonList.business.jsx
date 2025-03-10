import { useEffect, useState } from "react";
import { getPokemonList } from "@core/http/http";
import ArrowLeftIcon from "@assets/Icons/ArrowLeftIcon.svg";
import ArrowRightIcon from "@assets/Icons/ArrowRightIcon.svg";
import { Container, Text, Button, Image, } from "@shared/components/index"
import { PokemonDetails } from "./components/pokemonDetails/pokemonDetails";
import { CircularProgress } from "@mui/material";

export const PokemonList = () => {
    const [openDetails, setOpenDetails] = useState(false);
    const [data, setData] = useState();
    const [pokemonListOffset, setPokemonListOffset] = useState(0);
    const [pokemonListTotal, setPokemonListTotal] = useState(0);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPokemonList(pokemonListOffset);
                setData(data);
                setPokemonListTotal(data.count);
            } catch (error) {
                console.error("Error fetching Pokemon list:", error);
            }
        };

        fetchData();
    }, [pokemonListOffset]);

    return (
        <Container
            $h="100%"
            $w="100%"
            $backgroundColor="rgba(255, 255, 255, 0)"
        >
            <Container
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
                $gap="1rem"
                $flexWrap="wrap"
                $overflow="scroll"
                $w="100%"
                $h="90%"
                $p="2rem 5rem"
            >
                {data
                    ? data.pokemons.map((data) => (
                          <Container
                              $h="16rem"
                              $w="16%"
                              key={data.name}
                              $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, transparent 100%)rgba(255, 255, 255, 0.5)"
                              $borderLeft="1px solid rgba(0, 0, 0, 0.3)"
                              $borderTop="1px solid rgba(0, 0, 0, 0.3)"
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
                              $cursor="pointer"
                              $hoverFilter="brightness(120%)"
                              $border="none"
                              $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1),  5px 5px 4px 0px rgba(0, 0, 0, 0.5)"
                          >
                              <Image
                                  src={data.image_url}
                                  alt={data.name}
                                  $w="80%"
                                  $h="80%"
                                  $imageRendering="pixelated"
                              />
                              <Text $fontSize="1.5rem" $fontWeight="500" $fontColor="var(--primary-blue)">
                                  {data.name.charAt(0).toUpperCase() +
                                      data.name.slice(1)}
                              </Text>
                          </Container>
                      ))
                    : <CircularProgress />}

                <Button
                    $position="absolute"
                    $left="1rem"
                    $iconPosition={"left"}
                    $border={"none"}
                    $boxShadow={"none"}
                    $bgColor={"transparent"}
                    $icon={ArrowLeftIcon}
                    $iconStroke={"#fff"}
                    $iconSizeW={"4rem"}
                    $iconSizeH={"4rem"}
                    $borderRadius={"50%"}
                    $p={"0.5rem"}
                    $hoverBackgroundColor={"#cccccc80"}
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
                    $iconStroke={"#fff"}
                    $iconSizeW={"4rem"}
                    $iconSizeH={"4rem"}
                    $borderRadius={"50%"}
                    $p={"0.5rem"}
                    $hoverBackgroundColor={"#cccccc80"}
                    $display={"flex"}
                    $alignItems={"center"}
                    $justifyContent={"center"}
                    onClick={() => {
                        if (pokemonListOffset + 10 >= pokemonListTotal) {
                            setPokemonListOffset(0);
                        } else {
                            setPokemonListOffset(pokemonListOffset + 10);
                        }
                    }}
                />
            </Container>
            <Container
                $w="100%"
                $h="10%"
                $display="flex"
                $justifyContent="center"
                $alignItems="center"
            >
                <Text
                    $fontSize="2rem"
                    $fontFamily="PokeFont"
                    $fontColor="var(--primary-yellow)"
                    $textStrokeColor="var(--primary-blue)"
                    $textStrokeWidth="2px"
                    $letterSpacing="3px"
                >
                    Page {Math.floor(pokemonListOffset / 10) + 1} of{" "}
                    {Math.ceil(pokemonListTotal / 10)}
                </Text>
            </Container>

            <PokemonDetails
                open={openDetails}
                setOpen={setOpenDetails}
                pokemonName={pokemonName}
                pokemonImage={pokemonImage}
            />
        </Container>
    );
};
