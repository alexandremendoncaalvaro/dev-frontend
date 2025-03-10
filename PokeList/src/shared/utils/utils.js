import BackgroundImg_1 from "@assets/Images/pokemonPortraitsBackground/background-1.jpg";
import BackgroundImg_2 from "@assets/Images/pokemonPortraitsBackground/background-2.jpg";
import BackgroundImg_3 from "@assets/Images/pokemonPortraitsBackground/background-3.jpg";
import BackgroundImg_4 from "@assets/Images/pokemonPortraitsBackground/background-4.jpg";
import BackgroundImg_5 from "@assets/Images/pokemonPortraitsBackground/background-5.jpg";
import BackgroundImg_6 from "@assets/Images/pokemonPortraitsBackground/background-6.jpg";
import BackgroundImg_7 from "@assets/Images/pokemonPortraitsBackground/background-7.jpg";

export const capitalizeName = (pokeName) => {
    return pokeName?.charAt(0).toUpperCase() + pokeName?.slice(1);
};

const backgroundImages = [BackgroundImg_1, BackgroundImg_2, BackgroundImg_3, BackgroundImg_4, BackgroundImg_5, BackgroundImg_6, BackgroundImg_7];

export const getRandomBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
};