import React from 'react';
import { Flex, Box, Card, Button, Image } from 'rebass';
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
      <Card
        fontSize={6}
        fontWeight='bold'
        p={5}
        my={5}
        bg='#d6ead4'
        borderRadius={8}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <div key={message._id}>
          <Box fontFamily="'Comic Sans', cursive;">
            {message.attrs.content}
          </Box>
        </div>
      </Card>
    ));
  }

  render() {
    return (
      <Flex>
        <Box fontFamily="'Annie Use Your Telescope', cursive;" width={[1, 1 / 2]} mx="auto" textAlign="center">
          <Input
            mt={3}
            width={1}
            placeholder=" "
            value={this.state.newMessage}
            onChange={evt => this.setState({ newMessage: evt.target.value })}
          />

          <Flex justifyContent="center">
            <Button bg="#00738c" onClick={() => this.submit()} mt={2}>
              Share Your Thoughts
            </Button>
          </Flex>

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
