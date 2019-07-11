import React from 'react';
import logo from './logo.svg';
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
    hiScore: 0,
    lost: false,
  }

  clickHandler = (event) => {
    // console.log("+++ clickHandler +++");
    let score = this.state.score;
    let hiScore = this.state.hiScore;
    const tileArray = this.state.tiles;

    // console.log(event.target);
    const tIndx = tileArray.findIndex(el => el.id == event.target.id);  // sloppy equivalence: HTML attributes are stored as strings, and I'm being lazy.
    // console.log(tIndx);
    const theTile = tileArray[tIndx]

    if (theTile.clicked) {
      // console.log("fail");
      tileArray.forEach(element => {
        element.clicked = false;
      });
      this.setState({tiles: tileArray, score: 0, lost: true, headerText: "Fail!"});
    }
    else {
      // console.log("nice");
      theTile.clicked = true;
      score++;
      if (hiScore <= score) {
        hiScore = score;
      }
      this.setState({tiles: tileArray, score, hiScore, lost: false, headerText: "Nice!"});
    }
    // console.log("+++ clickHandler +++");
  }

  render() {
    // console.log(this.state.tiles);
    return (
      <div className="App">
        <Header lost={this.state.lost} score={this.state.score} hiScore={this.state.hiScore} />
        <Banner />
        <Layout tiles={this.state.tiles} clickHandler={this.clickHandler} lost={this.state.lost} />
        <Footer logo={logo} />
      </div>
    );
  }
}

export default App;