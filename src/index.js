// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import * as firebasedb from './firebasedb';

import AddNotes from './components/add_notes';
import Note from './components/note';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(
        {
          // 0: {
          //   title: 'testing',
          //   text: '![](http://i.giphy.com/gyRWkLSQVqlPi.gif)',
          //   x: 400,
          //   y: 12,
          //   zIndex: 10,
          // },
        },
      ),
    };

    // bind all callback functions
    this.renderNote = this.renderNote.bind(this);
    this.addition = this.addition.bind(this);
    this.deletion = this.deletion.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    firebasedb.fetchNotes((notes) => {
      this.setState({ notes: Immutable.Map(notes) });
    });
  }

  // all immutable function, ps: don't capitalize functionName
  addition(id, title) {
    firebasedb.create(title);
  }
  //   firebasedb.create(title, () => {
  //     this.setState({
  //       notes: this.state.notes.set(this.state.notes.size + 1, { title }),
  //     });
  //   });
  // }

  deletion(id) {
    firebasedb.remove(id);
  }
  //   this.setState({
  //   notes: this.state.notes.delete(id),
  // });

  update(id, newNote) {
    console.log(newNote);
    const newN = Object.assign({}, this.state.notes.get(id), newNote);
    console.log(newN);
    firebasedb.update(id, newN);
  }
  //   firebasedb.update(id, () => {
  //     this.setState({
  //       notes: this.state.notes.update(id, (oldnote) => { return Object.assign({}, oldnote, newNote); }),
  //     });
  //   });
  // }

  // return note instance to every note object in the map in state
  renderNote() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return <Note className="notess" key={id} id={id} x={note.x} y={note.y} title={note.title} deletion={this.deletion} update={this.update} text={note.text} />;
    });
  }

  render() {
    return (
      <div>
        <AddNotes addition={this.addition} />
        {this.renderNote()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
