import { TrainingInterface } from "./TrainingInterface";
import { useParams, useLocation } from "react-router";
import { usePokemonImage, useTrainPokemon } from "./services/axiosServices";
import { useState, useEffect } from "react";

export const TrainingContainer = () => {
   
    const location = useLocation();
    const { name , image_url } = location.state || {};

    //const {pokemon, isLoading, isError} = usePokemonImage(pokemonName);
   
    const [epochs, setEpochs] = useState(1);
    const [batchSize, setBatchSize] = useState(1);
    const [learningRate, setLearningRate] = useState(0.01);
    const [typeTraining, setTypeTraining] = useState('Balanceado');
    const [startTraining, setStartTraining] = useState(false);
    const [isTraining, setIsTraining] = useState(false);

    const [epochsAnimation, setEpochsAnimation] = useState(null);
    const [indexEpochsAnimation, setIndexEpochsAnimation] = useState(0);
    const [xpPerBattleAnimation, setXpPerBattleAnimation] = useState(null);
    const [xpPercentageAnimation, setXpPercentageAnimation] = useState(null);

    const body = {
        pokemon: name,
        epochs: epochs,
        batch_size: batchSize,
        learning_rate: learningRate,
        optimizer: typeTraining,
        early_stopping: false
    };

    const {result, isLoadingTrain, isErrorTrain} = useTrainPokemon(body, startTraining);

    useEffect(() => {
        let isMounted = true;

        if(result != null || result != undefined){
            setIsTraining(true);
        }

        if (isMounted && result && !isLoadingTrain) {
            setStartTraining(false);
        }

        if (isMounted && isErrorTrain) {
            console.log(isErrorTrain);
            setStartTraining(false);
        }

        return () => {
            isMounted = false;
        };
    }, [result, isLoadingTrain, isErrorTrain]);


    const events = {
        setEpochs: (value) => setEpochs(value),
        setBatchSize: (value) => setBatchSize(value),
        setLearningRate: (value) => setLearningRate(value),
        setTypeTraining: (value) => setTypeTraining(value),
        startTraining: () => setStartTraining(true),
        setEpochsAnimation: (value) => setEpochsAnimation(value),
        setXpPerBattleAnimation: (value) => setXpPerBattleAnimation(value),
        setXpPercentageAnimation: (value) => setXpPercentageAnimation(value),
        setIndexEpochsAnimation: (value) => setIndexEpochsAnimation(value),
        setIsTraining: (value) => setIsTraining(value)
    };

    const states = {
        epochs,
        batchSize,
        learningRate,
        typeTraining,
        isTraining,
        epochsAnimation,
        xpPerBattleAnimation,
        xpPercentageAnimation,
        indexEpochsAnimation
    };

    console.log(result)

    return (
        <TrainingInterface 
            name={name} 
            image_url={image_url} 
            events={events} 
            states={states}
            result={result}
            isLoadingTrain={isLoadingTrain}
            isErrorTrain={isErrorTrain}
        />
    );
};