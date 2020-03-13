import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("Default initializer")

    const movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/d4KNaTrltq6bpkFS01pYtyXa09m.jpg", title: "The Godfather", overwiev: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family."},
      {id: 1, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg", title: "The Godfather: Part II", overwiev: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York"},
    ]

    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" src={movie.poster_src}/>
              </td>
              <td>
              {movie.title}
              </td>
          </tr>
        </tbody >
      </table>
    movieRows.push(movieRow)
    })

    this.state = {rows : movieRows}
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
