import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
//context store 선언
import Store from "store";

class AppContainer extends Component {
  constructor(props){
    super(props);
    this._changeMessage = () => {
      if(this.state.message === "Hello"){
        this.setState({
          message : "Bye"
        });
      }else {
        this.setState({
          message : "Hello"
        });
      }
    };

    this.state = {
      message : "Hello",
      changeMessage : this._changeMessage
    };
  }
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