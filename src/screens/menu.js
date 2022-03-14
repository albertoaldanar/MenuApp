import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MockData from "../mock.json";
import { fetchMenuData } from "../redux/actions/menuActions";
import Header from "../components/header";
import MenuItem from "../components/menuItem";
import API from '../apis/menuApi';

function Menu(props) {
  const [menuSectionSelected, setMenuSectionSelected] = useState(0);
  const menuSectionListRef = useRef(null);
  const menuList = MockData.result.menus[0].menu_sections;
  const restaurantName = MockData.result.restaurant_name;

  useEffect(() => {
    // getMenus()
  }, [])


  async function getMenus(){
    try {
      const notifResponse = await API.getMenu();

      console.log("data response", notifResponse)
        
  } catch (err) {
          console.log("error =>", err);

  }
  }

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

  console.log("selected", menuSectionSelected);

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
  },
  flatListContainers: {
    marginTop: 20,
  },
  flatListMenuContainer: {
    marginBottom: "60%",
    marginTop: 20,
  },
  sectionListTitle: {
    textTransform: "uppercase",
    letterSpacing: 0.6,
    padding: 20,
    fontFamily: "Montserrat",
    fontSize: 13,
    color: "gray",
  },
  sectionListSelectedTitle: {
    textTransform: "uppercase",
    letterSpacing: 0.6,
    textDecorationLine: "underline",
    padding: 20,
    fontFamily: "Montserrat",
    color: "black",
  },
  menuSelectedContainer: {
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    menuData: state.menuData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMenuData: (object) => dispatch(fetchMenuData(object)),
});


Menu.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
