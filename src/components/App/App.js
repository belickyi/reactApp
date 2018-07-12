import React, { Component } from 'react'; 
import './App.css';
// Components
import Table from '../Table/Table'

class App extends Component {
  render() {
    var tableArr = [
      [1,-1,-1,1,1,1,-1],
      [0,1,-1,-1,-1,1,0],
      [0,0,0,0,0,1,0],
      [0,0,0,0,0,1,0],
      [0,0,0,1,0,0,0],
      [1,0,0,0,0,0,1]
  ];

    return (
      <div className="App col">
        <div className='row justify-content-between'>

          <div className='left col-2'> {/* left column */}
            <img src="red.png"></img>
            <div className="score">
              <span>Score </span>
              <span>0</span>
            </div>
          </div>

          <div className='board'> {/* board */}
            {/* Pass table array to Table component */}
            <Table data={tableArr}/>
          </div>

          <div className='right col-2'> {/* right column */}
            <img src="blue.png"></img>
            <div className="score">
              <span>Score </span>
              <span>0</span>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;