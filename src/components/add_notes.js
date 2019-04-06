import React, { Component } from 'react';


class AddNotes extends Component {

  constructor(props) {
    super(props);

    this.state = { searchterm: 'new note title' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ searchterm: event.target.value });
  }

  onAddClick() {
    this.props.addition(this.props.id, this.state.searchterm);
    // this.setState({ searchterm: 'new note title' });
  }

  render() {
    // in render method change return to:
    return (
      <div className="AddNotesSec">
        <input onChange={this.onInputChange} value={this.state.searchterm} className="TitleInput" />
        <button className="SubmitB" onClick={this.onAddClick}>Submit</button>
      </div>
    );
  }
}

export default AddNotes;
