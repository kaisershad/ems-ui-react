import * as React from 'react';
import './App.css';
import Header from './header/header';
import Navigator from './navigator/navigator';
import Overview from './overview/overview';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigator />
        <Overview />
      </div>
    );
  }
}

export default App;
