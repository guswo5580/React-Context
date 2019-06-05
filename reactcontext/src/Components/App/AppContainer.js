import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
//context store 선언
import Store from 'store';

class AppContainer extends Component {
  constructor(props){
    super(props);

    this._deleteNotification = id => {
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      });
    };
    this._seeNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState, //state에 대한 불변
          notifications : {//반환 Data
            ...currentState.notifications, //반환 Data 불변
            [id] : {//반환 Data에서의 변형 Data
              ...currentState.notifications[id], //변형 Data 불변
              seen : true //Data 변형
            }
          }
        }
      });
    };

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
      },
      deleteNotification : this._deleteNotification,
      seeNotification : this._seeNotification
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