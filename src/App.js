import React from 'react';
import logo from './logo.svg';
import './App.css';
import fs from "fs";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inTime: "",
      outTime: "",
      dialogue: ""
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInTimeChange = this.handleInTimeChange.bind(this);
    this.handleOutTimeChange = this.handleOutTimeChange.bind(this);
    this.handleDialogueChange = this.handleDialogueChange.bind(this);
  }

  onFormSubmit = (event) => {
    //alert('Your favorite flavor is: ' + dialogue);
    event.preventDefault();
    var data = {
      inTime: this.inTime.value,
      outTime: this.outTime.value,
      dialogue: this.dialogue.value
    }
    console.log(data);
    fs.writeFile("subtitles.txt", data, 'utf8',(err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  }

  handleInTimeChange(event) {
    this.setState({ inTime: event.target.value });
  }

  handleOutTimeChange(event) {
    this.setState({ outTime: event.target.value });
  }

  handleDialogueChange(event) {
    this.setState({ dialogue: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Start writing your subtitles.
        </p>
          <form className="App-form" onSubmit={this.onFormSubmit}>
            <label>
              InTime:
    <input type="text" name="inTime" ref={(c) => this.inTime = c} value={this.state.inTime} onChange={this.handleInTimeChange} />
            </label>
            <label>
              OutTime:
    <input type="text" name="outTime" ref={(c) => this.outTime = c} value={this.state.outTime} onChange={this.handleOutTimeChange} />
            </label>
            <label>
              Dialogue text:
    <input type="text" name="dialogue" ref={(c) => this.dialogue = c} value={this.state.dialogue} onChange={this.handleDialogueChange} />
            </label>
            <button>Send Data!!</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
