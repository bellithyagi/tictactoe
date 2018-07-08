import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Board from './components/board/board.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
