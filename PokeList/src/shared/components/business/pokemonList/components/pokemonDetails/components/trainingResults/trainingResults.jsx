/* eslint-disable react/prop-types */
import { Container, Text } from "@shared/components/index";
import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

export const TrainingResults = ({ trainedPokemonData, loading, totalBattles, totalXp, setTotalBattles, setTotalXp }) => {
    useEffect(() => {
        if (trainedPokemonData) {
            setTotalBattles(prev => prev + trainedPokemonData.battles.length);
            setTotalXp(prev => prev + trainedPokemonData.total_xp);
        }
    }, [trainedPokemonData]);

    const aggregatedData = trainedPokemonData?.battles
        ? trainedPokemonData.battles.reduce((acc, battle) => {
              if (!acc[battle.epoch]) {
                  acc[battle.epoch] = { totalXp: 0, count: 0 };
              }
              acc[battle.epoch].totalXp += battle.xp_gained;
              acc[battle.epoch].count++;
              return acc;
          }, {})
        : {}; 

    const epochs = Object.keys(aggregatedData || {})
        .map(Number)
        .sort((a, b) => a - b);

    const avgXp = epochs?.map(
        (epoch) => aggregatedData[epoch].totalXp / aggregatedData[epoch].count
    );

    return (
        <Container
            $w="95%"
            $h="95%"
            $gridRow={"span 3 / span 3"}
            $gridRowStart={"5"}
            $gridColumn={"span 2 / span 2"}
            $display={"flex"}
            $justifyContent="center"
            $alignItems="center"
            $justifySelf="center"
            $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, transparent 100%)rgba(255, 255, 255, 0.5)"
            $borderRadius="1rem"
            $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1),  3px 3px 5px 0px rgba(0, 0, 0, 0.5)"
        >
            {loading ? (
                <CircularProgress />
            ) : trainedPokemonData ? (
                <Container $w="100%" $h="100%" $display="flex" $flexDirection="column">
                    <Container
                        $w="100%"
                        $h="20%"
                        $display="flex"
                        $flexDirection="column"
                        $justifyContent="center"
                        $alignItems="center"
                        $gap="1rem"
                    >
                        <Text $fontSize="1.5rem" $fontWeight="500">
                            Training Results
                        </Text>

                        <Container
                            $w="100%"
                            $h="10%"
                            $display="flex"
                            $justifyContent="space-around"
                            $alignItems="center"
                        >
                            <Text $fontSize="1.3rem">
                                Total Battles:{" "}
                                {totalBattles}
                            </Text>
                            <Text $fontSize="1.3rem">
                                Total XP gained: {totalXp}
                            </Text>
                        </Container>
                    </Container>

                    <Container
                        $w="98%"
                        $h="80%"
                        $display="flex"
                        $justifyContent="center"
                        $alignItems="center"
                    >
                        <LineChart
                            xAxis={[{ data: epochs, label: "Rounds" }]}
                            yAxis={[{ label: "XP" }]}
                            series={[
                                {
                                    data: avgXp,
                                    label: "Average XP per Round",
                                },
                            ]}
                        />
                    </Container>
                </Container>
            ) : (
                <Text $fontSize="2rem" $fontWeight="bold">
                    Waiting for training
                </Text>
            )}
        </Container>
    );
};
