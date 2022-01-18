import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Color } from "../utils/color";

class Loader extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
          
        <ActivityIndicator size="large" color={Color.LOADING} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loader;