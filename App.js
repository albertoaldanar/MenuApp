import MenuAppNavigation from "./src/navigation/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MenuAppNavigation />
    </Provider>
  );
}
