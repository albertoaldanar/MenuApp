import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import API from "../apis/menuApi";

function Menu(props) {
  useEffect(() => {
    getMenus();
  }, []);

  async function getMenus() {
    try {
      const menuResponse = await API.getMenu();
    } catch (err) {
      console.log("error =>", err);
    }
  }

  console.log("props", props.menuData);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: "red" }}>MENU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    menuData: state.menuData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeMenuData: (object) => dispatch(changeMenuData(object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
