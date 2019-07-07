import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import tiles from "./tiles.json"
import Header from './components/Header';
import Banner from './components/Banner';
import Layout from './components/Layout';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    tiles,
    score: 0,
    hiScore: 0
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header score={this.state.score} hiScore={this.state.hiScore} />
        <Banner />
        <Layout tiles={this.state.tiles} />
        <Footer />
      </div>
    );
  }
}

export default App;
