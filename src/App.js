import React from 'react';
import './App.css';

function App() {
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

    </div>
  );
}

export default App;
