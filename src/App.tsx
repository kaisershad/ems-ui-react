import * as React from 'react';
import './App.css';
import Header from './header/header';
import Navigator from './navigator/navigator';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigator/>
      </div>
    );
  }
}

export default App;
