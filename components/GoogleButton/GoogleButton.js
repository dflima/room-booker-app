import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet } from "react-native";

const GoogleButton = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} />
);

GoogleButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default GoogleButton;
