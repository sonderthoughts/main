import React from 'react';
import { Flex, Box, Button } from 'rebass';
import PropTypes from 'prop-types';
import { User } from 'radiks';

import Text from '../styled/typography';
import Input from '../styled/input';
import Message from '../models/Message';

export default class Feed extends React.Component {
  static propTypes = {
    messages: PropTypes.array,
  }

  static defaultProps = {
    messages: [],
  }

  state = {
    newMessage: '',
    createdMessageIDs: {},
    messages: [],
    currentUser: null,
  }

  componentWillMount() {
    const rawMessages = this.props.messages;
    const messages = rawMessages.map(messageData => new Message(messageData.attrs));
    this.setState({ messages });
  }

  componentDidMount() {
    this.setState({
      currentUser: User.currentUser(),
    });
    Message.addStreamListener(this.newMessageListener.bind(this));

  }

  async submit() {
  const { newMessage } = this.state;
  const message = new Message({
    content: newMessage,
    createdBy: this.state.currentUser._id,
  });
  const { messages, createdMessageIDs } = this.state;
  messages.unshift(message);
  createdMessageIDs[message._id] = true;
  this.setState({ messages, createdMessageIDs, newMessage: '' });
  await message.save();
  }

  newMessageListener(message) {
  const { messages } = this.state;
  if (!this.state.createdMessageIDs[message._id]) {
    messages.unshift(message);
    this.setState({ messages });
  }
}

  messages() {
    return this.state.messages.map(message => (
      <div key={message._id}>
        <Text.p mt={4} mb={1}>
          {message.attrs.createdBy}
          {' '}
          says:
        </Text.p>
        <Text.em>{message.attrs.content}</Text.em>
      </div>
    ));
  }

  render() {
    return (
      <Flex>
        <Box width={[1, 1 / 2]} mx="auto" textAlign="center">
          <Text.p textAlign="center">
            Create a post:
          </Text.p>

          <Input
            mt={3}
            width={1}
            placeholder="What do you have to say?"
            value={this.state.newMessage}
            onChange={evt => this.setState({ newMessage: evt.target.value })}
          />

          <Button onClick={() => this.submit()} mt={2}>
            Submit
          </Button>

          {this.messages()}

          <Text.p textAlign="center">
            Only showing the most recent
            {' '}
            {this.state.messages.length}
            {' '}
            messages.
          </Text.p>
        </Box>
      </Flex>
    );
  }
}
