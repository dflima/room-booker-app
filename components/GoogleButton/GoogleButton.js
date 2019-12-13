import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet } from "react-native";

const GoogleButton = ({ title, onPress }) => (
  <Button style={styles.button} title={title} onPress={onPress} />
);

GoogleButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  button: {
    width: 184,
    height: 42,
    backgroundColor: "#4285f4",
    fontSize: 48
  }
});

export default GoogleButton;
