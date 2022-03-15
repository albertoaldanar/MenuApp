import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';

function Header(props) {
  const children = props.children;
  return (
    <View style={styles.container}>
      <View style={styles.retaurantNameTitleContainer}>
        <Text style={styles.retaurantNameTitle}>{children}</Text>
      </View>

      <Text style={styles.menuText}>MENU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  retaurantNameTitle: {
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    letterSpacing: 0.8,
    fontFamily: "Montserrat",
  },
  retaurantNameTitleContainer: {
    borderBottomWidth: 0.7,
    borderBottomColor: "#dcdcdc",
    width: "100%",
  },
  menuText: {
    textTransform: "uppercase",
    fontSize: 20,
    marginTop: 40,
    letterSpacing: 0.8,
    fontFamily: "Montserrat",
  },
});

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
