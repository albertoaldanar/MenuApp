import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  BackHandler,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchMenuData } from "../redux/actions/menuActions";
import MenuLoadingImage from "../assets/images/menuLoading.gif";

function Splash(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS == "android") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => true
      );
      return () => backHandler.remove();
    }

    callMenuData();
  }, []);

  function callMenuData() {
    dispatch(fetchMenuData());
    navigateToMenu();
  }

  function navigateToMenu() {
    setTimeout(() => {
      props.navigation.navigate("Menu");
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <Image source={MenuLoadingImage} style={styles.loadingImage} />
      <Text style={styles.loadingText}>Loading menu </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  loadingImage: {
    height: 350,
    width: 350,
    marginTop: "50%",
  },
  loadingText: {
    fontSize: 21,
    letterSpacing: 0.9,
    fontWeight: "300",
  },
});

export default Splash;
