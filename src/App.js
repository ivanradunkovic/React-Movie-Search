import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    // console.log("Default initializer")

    // const movies = [
    //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/d4KNaTrltq6bpkFS01pYtyXa09m.jpg", title: "The Godfather", overwiev: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family."},
    //   {id: 1, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg", title: "The Godfather: Part II", overwiev: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York"},
    // ]

    // let movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    // movieRows.push(movieRow)
    // })

    // this.state = {rows : movieRows}

    this.perfomSearch("Lord of the Rings")
}
    perfomSearch(searchTerm) {
      console.log("Perform search using MovieDB API")
      const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Fetched data sucssesfuly")
          // console.log(searchResults)
          const results = searchResults.results
          // console.log(results[0])

          let movieRows = []

          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            // console.log(movie.title)
            const movieRow = <MovieRow key={movie.id} movie={movie} />
            movieRows.push(movieRow)
          })

          this.setState({rows: movieRows})

        },
        error: (hxr, status, err) => {
          console.error("Fialed to fetch data")
        }
      })
    }

    searchChangeHandler(event) {
      console.log(event.target.value)
      const boundObject = this
      const searchTerm =event.target.value
      boundObject.perfomSearch(searchTerm)
    }

render() {
  return (
    <div>

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
   
      <input style={{
        fontsize :25,
        display: 'block',
        width: '50%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15
      }} onChange={this.searchChangeHandler.bind(this)} placeholder= "Search for movie" />

    {this.state.rows}

    </div>
    );
  }
}

export default App;
