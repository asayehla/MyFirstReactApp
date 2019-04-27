import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    swCharacters: []
  }
  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    axios.get(proxyUrl + 'https://swapi.co/api/people').then(response => {
      const data = response.data.results
      this.setState({ swCharacters: data });
      console.log(data);
    })

  }
  render() {
    let swCharactersList = this.state.swCharacters.map(swCharacter => {
      return (<li key={swCharacter.name}>{swCharacter.name}</li>)
    })

    return (
      <>
        <ul>
          {swCharactersList}
        </ul>
      </>
    )
  }
}

export default App;
