/* eslint-disable react/prop-types */
import { Container, Text, Button, Slider, Input } from "@shared/components/index"

export const TrainingParameters = ({
    epochs,
    setEpochs,
    batchSize,
    setBatchSize,
    learningRate,
    setLearningRate,
    optimizer,
    setOptimizer,
    handleStartTraining,
}) => {
    return (
        <Container
            $w="95%"
            $h="95%"
            $gridRow={"span 3 / span 3"}
            $gridRowStart={"2"}
            $gridColumn={"span 2 / span 2"}
            $display="flex"
            $flexDirection="column"
            $justifyContent="center"
            $justifySelf="center"
            $alignItems="center"
            $background="linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, transparent 100%)rgba(255, 255, 255, 0.5)"
            $borderRadius="1rem"
            $boxShadow="inset 2px 2px 0px 0px rgba(255, 255, 255, 1),  3px 3px 5px 0px rgba(0, 0, 0, 0.5)"
            $p="0.5rem 0 0.5rem 0"
        >
            <Text $fontSize="1.5rem" $fontWeight="500" $p="0.5rem 0">
                Choose how your pokemon will be trained
            </Text>

            <Container $w="100%" $h="100%" $display="flex" $flexDirection="row">
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
                            How many training rounds will the Pokémon face?
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
                                onChange={(e) => setEpochs(e.target.value)}
                                $p="0 2rem"
                                $w="60%"
                                $h="10px"
                                $borderRadius="5px"
                                $background="var(--slider-range)"
                                $thumbBackground="var(--slider-thumb)"
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
                                                  Math.min(50, Number(value))
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
                                onChange={(e) => setBatchSize(e.target.value)}
                                $w="60%"
                                $h="10px"
                                $borderRadius="5px"
                                $background="var(--slider-range)"
                                $thumbBackground="var(--slider-thumb)"
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
                                                  Math.min(10, Number(value))
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
                        <Text $fontSize="1.3rem" $p="0 0 1rem 0">
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
                                    setLearningRate(Number(e.target.value))
                                }
                                $p="0 2rem"
                                $w="60%"
                                $h="10px"
                                $borderRadius="5px"
                                $background="var(--slider-range)"
                                $thumbBackground="var(--slider-thumb)"
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
                                                  Math.min(1, Number(value))
                                              )
                                    );
                                }}
                                onBlur={() => {
                                    if (!learningRate) setLearningRate(0.01);
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
                                onChange={(e) => setOptimizer(e.target.value)}
                            >
                                <option value="ofensivo">Offensive</option>
                                <option value="defensivo">Defensive</option>
                                <option value="balanceado">Balanced</option>
                            </select>
                        </Container>
                    </Container>
                </Container>
            </Container>

            <Button
                $fontSize={"1.3rem"}
                $borderRadius={"2rem"}
                $bgColor={"var(--primary-red)"}
                $hoverBackgroundColor={"var(--secondary-red)"}
                $fontColor={"white"}
                $border={"none"}
                $text="Start Training"
                $p={"0.5rem 1rem"}
                onClick={() => handleStartTraining()}
            />
        </Container>
    );
};
