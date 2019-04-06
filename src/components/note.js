import React, { Component } from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import Textarea from 'react-textarea-autosize';
import marked from 'marked';

class Note extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      text: props.text,
      x: props.x || 0,
      y: props.y || 0,
      zIndex: 0,
      isEditing: false,
    };

    this.onDrag = this.onDrag.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.renderEditButton = this.renderEditButton.bind(this);
    this.onTextareaChange = this.onTextareaChange.bind(this);
    this.onTextareaChangeTitle = this.onTextareaChangeTitle.bind(this);
  }

  onDrag(e, ui) {
    this.setState({
      x: ui.x,
      y: ui.y,
    });
    this.props.update(this.props.id, { x: ui.x, y: ui.y });
  }

  onDeleteClick() {
    this.props.deletion(this.props.id);
  }

  onTextareaChange(event) {
    this.setState({ text: event.target.value });
    this.props.update(this.props.id, { text: event.target.value });
  }

  onTextareaChangeTitle(event) {
    this.setState({ title: event.target.value });
    this.props.update(this.props.id, { title: event.target.value });
  }

  renderEditButton() {
    if (this.state.isEditing) {
      return (
        <div>
          <div> Title
            <Textarea onChange={this.onTextareaChangeTitle}
              value={this.state.title}
            />
          </div>
          <div className="iconList">
            <i onClick={() => this.setState({ isEditing: false })}className="fa fa-check" />
            <i onClick={this.onDeleteClick} className="fa fa-trash-o" />
            <i className="fa fa-arrows-alt note-mover" />
          </div>
          <div> Content
            <Textarea onChange={this.onTextareaChange} value={this.state.text} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.title}</h1>
          <div className="iconList">
            <i onClick={() => this.setState({ isEditing: true })} className="fa fa-pencil" />
            <i onClick={this.onDeleteClick} className="fa fa-trash-o" />
            <i className="fa fa-arrows-alt note-mover" />
          </div>
          <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.state.text || '') }} />
        </div>
      );
    }
  }

  render() {
    return (
      <Draggable
        handle=".note-mover"
        grid={[25, 25]}
        defaultPosition={{ x: this.props.x, y: this.props.y }}
        // two{}: one for js, one for json
        position={{ x: this.state.x, y: this.state.y }}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >
        <div className="noteBox">
          {this.renderEditButton()}
        </div>
      </Draggable>
    );
  }
}

export default Note;
