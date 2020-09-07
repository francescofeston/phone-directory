import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="Header">
          Phone Directory
          </div>
        <button>Add</button>
        <div>
          <span>Name</span><br/>
          <span>Phone</spa
    </div>*/}
    <label htmlFor="name">Name: </label>
    <input id="name" type="text" placeholder="Type here" defaultValue="franz"/>
      </div>
    );
  }
}

export default App;
