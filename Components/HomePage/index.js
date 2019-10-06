import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

class HomePage extends Component {
  async componentDidMount() {
    await this.props.fetchCoffeeShops();
  }

  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoffeeShops: () => dispatch(actionCreators.getcoffeeShops())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
