import { useFonts } from "expo-font";

const loadFonts = () => {
    const [loaded] = useFonts({
        Playfair: require('../assets/fonts/Playfair.ttf'),
        Montserrat: require("../assets/fonts/Montserrat.ttf"),
    });
    
    if (!loaded) {
      return null;
    }
}

export default loadFonts;
