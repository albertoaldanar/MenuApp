import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/header";
import MenuItem from "../components/menuItem";

function Menu(props) {
  const [menuSectionSelected, setMenuSectionSelected] = useState(0);
  const menuSectionListRef = useRef(null);
  const menuData = useSelector((state) => state.menuData);
  const menuList = menuData.result.menus[0].menu_sections;
  const restaurantName = menuData.result.restaurant_name;

  useEffect(() => {
    if (Platform.OS == "android") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => true
      );
      return () => backHandler.remove();
    }
  }, []);

  const onSelectMenuSection = (section) => {
    setMenuSectionSelected(section);
    menuSectionListRef.current.scrollToIndex({
      animated: true,
      index: section,
      viewPosition: 0.5,
    });
  };

  const renderMenuSectionsList = ({ item, index }) => (
    <View key={item.section_name} style={styles.sectionListContainer}>
      <TouchableOpacity onPress={() => onSelectMenuSection(index)}>
        <Text
          style={
            index === menuSectionSelected
              ? styles.sectionListSelectedTitle
              : styles.sectionListTitle
          }
        >
          {item.section_name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderMenuSelectedDishes = ({ item }) => (
    <View key={item.name} style={styles.menuSelectedContainer}>
      <MenuItem menuItem={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header>{restaurantName}</Header>
      <FlatList
        style={styles.flatListContainers}
        data={menuList}
        renderItem={renderMenuSectionsList}
        keyExtractor={(item) => item.section_name}
        horizontal
        ref={menuSectionListRef}
      />

      <FlatList
        style={styles.flatListMenuContainer}
        data={menuList[menuSectionSelected].menu_items}
        renderItem={renderMenuSelectedDishes}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  sectionListContainer: {
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 0.7,
    borderTopColor: "#dcdcdc",
    borderTopWidth: 0.7,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    height: 80,
  },
  flatListContainers: {
    marginTop: 20,
  },
  flatListMenuContainer: {
    marginBottom: "60%",
  },
  sectionListTitle: {
    textTransform: "uppercase",
    letterSpacing: 0.6,
    fontFamily: "Montserrat",
    fontSize: 13,
    color: "gray",
    marginTop: 20,
  },
  sectionListSelectedTitle: {
    textTransform: "uppercase",
    letterSpacing: 0.6,
    textDecorationLine: "underline",
    fontFamily: "Montserrat",
    color: "black",
    marginTop: 20,
  },
  menuSelectedContainer: {
    alignItems: "center",
  },
});

export default Menu;
