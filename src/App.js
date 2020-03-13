import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("Default initializer")

    const movies = [
      {id: 0, title: "The Godfather", overwiev: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family."},
      {id: 1, title: "The Godfather: Part II", overwiev: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York"},
    ]

    this.state = {rows: [
      <p key="1">This is row 0</p>,
      <p key="2">This is row 1</p>,
      <p key="3">This is row 2</p>
    ]}
}

render() {
  return (
    <div className="App">

      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="MDB" width="50" src="icon.png" />
            </td>
            <td>
              <h1>Movie DB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
   
      <input className="Search" placeholder="Search for movie" />

    {this.state.rows}

    </div>
    );
  }
}

export default App;
