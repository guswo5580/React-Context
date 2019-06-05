import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
//context store 선언
import Store from 'store';

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      notifications : {
        '1' : {
          id : 1,
          text : 'First',
          seen : false
        },
        '2' : {
          id : 2,
          text : 'Second',
          seen : false
        },
        '3' : {
          id : 3,
          text : 'Third',
          seen : false
        }
      }
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