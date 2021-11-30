import { Component } from 'react';
import Cards from "./Cards";
import MyNavBar from "./MyNavBar";
import MyCarousel from "./MyCarousel";
import MyModal from './MyModal';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade1: false,
      fade2: false
    }
  }

  render() {
    return (
      <div>
        <MyNavBar />
        <MyCarousel />
        <MyModal />
        <Cards
          fade1={this.state.fade1}
          cardOneState={this.cardOneState}
          fade2={this.state.fade2}
          cardTwoState={this.cardTwoState}
        />
      </div>
    )
  }

  cardOneState = () => {
    this.setState({ fade1: !this.state.fade1 })
  }

  cardTwoState = () => {
    this.setState({ fade2: !this.state.fade2 })
  }

  // if something else something
  // if ? true : false
}

export default App;
