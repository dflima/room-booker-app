import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Login = () => (
  <View style={styles.container}>
    <Text style={styles.title}>RoomBooker</Text>
    <Button title="Login with Google" onPress />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 42,
    lineHeight: 49,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#562E70",
    paddingBottom: 50
  }
});

export default Login;
