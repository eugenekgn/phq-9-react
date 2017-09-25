import React, {Component} from 'react';
import Phq9Page from './phq9/Phq9Page';
import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Phq9Page/>
        {this.props.children}
      </div>
    );
  }
}

export default App;