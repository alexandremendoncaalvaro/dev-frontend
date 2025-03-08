import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, TextField, MenuItem, Button, CircularProgress, Card, CardMedia } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Div } from "./Div";

Chart.register(...registerables);

const Training = () => {
    const { name } = useParams();
    const [epochs, setEpochs] = useState(5);
    const [batchSize, setBatchSize] = useState(3);
    const [learningRate, setLearningRate] = useState(0.5);
    const [optimizer, setOptimizer] = useState("ofensivo");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [image, setImage] = useState("");
    
      const handleChange = (e) => {
        let value = parseFloat(e.target.value);
        if (isNaN(value)) {
          value = 0.1;
        }
        value = Math.max(0.1, Math.min(value, 1.0));
        setLearningRate(value);
      };

    useEffect(() => {
        axios.get(`https://treinamento.inteligenciadascoisas.com.br/pokemon/${name}/image`)
            .then((response) => {
                setImage(`data:image/png;base64,${response.data.image_base64}`);
            })
            .catch((error) => console.error(error));
    }, [name]);

    const startTraining = async () => {
        setLoading(true);
        try {
            const response = await axios.post("https://treinamento.inteligenciadascoisas.com.br/train/", {
                pokemon: name,
                epochs: parseInt(epochs),
                batch_size: parseInt(batchSize),
                learning_rate: parseFloat(learningRate),
                optimizer,
                early_stopping: false,
            });
            setResult(response.data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };



        return (
            <Div display={4} gridTemplateColumns={'50% 50%'} gap={'2rem'} alignItems={1} justifyContent={1} padding={'1rem'}>
                <Div width={'100%'}>
                    <Button component={Link} to="/" variant="contained" color="primary" fullWidth>
                        Home
                    </Button>
                    <Typography variant="h4" align="center" gutterBottom>
                        Treinamento de {name.toUpperCase()}
                    </Typography>
                    <Card sx={{ textAlign: "center", mb: 2 }}>
                        <CardMedia component="img" height="300" image={image} alt={name} />
                    </Card>
                    <TextField fullWidth label="Número de épocas" type="number" value={epochs} onChange={(e) => setEpochs(e.target.value)} margin="normal" />
                    <TextField fullWidth label="Batch size" type="number" value={batchSize} onChange={(e) => setBatchSize(e.target.value)} margin="normal" />
                    <TextField
                        label="Taxa de aprendizado"
                        type="number"
                        value={learningRate.toFixed(1)}
                        onChange={handleChange}
                        inputProps={{ step: 0.1, min: 0.1, max: 1.0 }}
                        margin="normal"
                        fullWidth
                    />

                    <TextField select fullWidth label="Estratégia de treinamento" value={optimizer} onChange={(e) => setOptimizer(e.target.value)} margin="normal">
                        <MenuItem value="ofensivo">Ofensivo</MenuItem>
                        <MenuItem value="defensivo">Defensivo</MenuItem>
                        <MenuItem value="equilibrado">Equilibrado</MenuItem>
                    </TextField>
                    <Button fullWidth variant="contained" color="primary" onClick={startTraining} disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : "Iniciar Treinamento"}
                    </Button>
                </Div>
                <Div width={'100%'}>

                    {result && (
                        <>
                            <Typography variant="h3" align="center" marginTop={3}>
                                XP total: {result.total_xp}
                            </Typography>
                            <Box sx={{ width: "100%", height: "400px" }}>
                                <Line data={{
                                    labels: result.battles.map((b, index) => `Época ${index + 1}`),
                                    datasets: [{
                                        label: "XP Ganho",
                                        data: result.battles.map((b) => b.xp_gained),
                                        borderColor: "blue",
                                        borderWidth: 2,
                                        fill: true,
                                    }],
                                }} options={{ maintainAspectRatio: false }} />
                            </Box>
                        </>
                    )}
                </Div>
            </Div>
        );
    };

    export default Training;