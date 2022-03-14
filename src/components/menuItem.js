import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';

function MenuItem(props) {
  const { menuItem } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.menuName}>{menuItem.name}</Text>
      <Text style={styles.menuDescription}>
        {menuItem.description === ""
          ? "No Description avaliable"
          : menuItem.description}
      </Text>
      <Text style={styles.menuPrice}>$ {menuItem.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
    marginTop: 10,
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 0.7,
    width: "100%",
    padding: 10,
    paddingBottom: 30
  },
  menuName: {
    fontSize: 22,
    marginBottom: 5,
    marginBottom: 5,
    fontFamily: 'Playfair'
  },
  menuDescription: {
    fontSize: 15,
    marginBottom: 5,
    color: "gray",
    fontWeight: "400",
    marginBottom: 5,
    fontStyle: "italic",
    fontFamily: 'Playfair'
  },
  menuPrice: {
    fontSize: 13,
    fontWeight: "300",
    fontFamily: 'Montserrat',
    color: "gray",
    marginTop: 10
  },
});

MenuItem.propTypes = {
  menuItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
};

export default MenuItem;
