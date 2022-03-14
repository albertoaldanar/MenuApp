import MenuAppNavigation from "./src/navigation/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Playfair: require("./src/assets/fonts/Playfair.ttf"),
    Montserrat: require("./src/assets/fonts/Montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MenuAppNavigation />
    </Provider>
  );
}
