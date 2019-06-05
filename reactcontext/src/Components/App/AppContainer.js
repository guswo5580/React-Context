import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
//context store 선언
import Store from "store";

class AppContainer extends Component {
  state = {
    message : 'Hello'
  };
  ComponentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message : 'Bye'
      });
    }, 2000)
  };
  render() {
    return (
      //redux의 Provider와 같은 기능
        <Store.Provider value={this.state}>
            <AppPresenter />
        </Store.Provider>
    );
  }
}

export default AppContainer;