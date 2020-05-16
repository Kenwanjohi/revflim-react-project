import React, { Component } from 'react';
import Styles from './App.module.css'
import Layout from './components/Layout/Layout';
import Movies from './components/Movies/Movies';
class App extends Component {
  render() {
    return (
      <Layout>
        <div className={Styles.container}>
        <Movies/>
        </div>
        <div>tv shows</div>
      </Layout>
    );
  }
}

export default App;
