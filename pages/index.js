import React from 'react';
import {
  Flex, Box, Button,
} from 'rebass';
import PropTypes from 'prop-types';
import { User, getConfig } from 'radiks';

import Text from '../styled/typography';
import Message from '../models/Message';
import Feed from '../components/feed';

class Home extends React.Component {
  static propTypes = {
    messages: PropTypes.array,
  }

  static defaultProps = {
    messages: [],
  }

  state = {
    currentUser: null,
  }

  static async getInitialProps() {
    const messages = await Message.fetchList({
        sort: '-createdAt',
        limit: 10,
    }, { decrypt: false });
     return {
        messages,
    };
    }

  async componentDidMount() {
  const { userSession } = getConfig();
    if (userSession.isUserSignedIn()) {
        const currentUser = userSession.loadUserData();
        this.setState({ currentUser });
    } else if (userSession.isSignInPending()) {
        const currentUser = await userSession.handlePendingSignIn();
        await User.createWithCurrentUser();
        this.setState({ currentUser });
    }
  }

  login = () => {
    const { userSession } = getConfig();
    userSession.redirectToSignIn();
  }

  logout = () => {
  const { userSession } = getConfig();
    userSession.signUserOut();
        this.setState({
    currentUser: null,
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Flex>
          <Box width={[1, 3 / 4]} mx="auto">

          <Text.h1 color="#00738c" textAlign="center">
            Sonder
          </Text.h1>
          <Text.h4 textAlign="center">
            The realization that each random passerby is living a life as vivid and complex as your own
          </Text.h4>


            {currentUser ? (
              <>
                <Text.small textAlign="center" display="block">
                  <a href="javascript:void(0)" onClick={this.logout}>Log Out</a>
                </Text.small>
                <Feed messages={this.props.messages} />
              </>
            ) : (
              <>
                <Button bg="#00738c" mt={3} onClick={this.login} mx="auto" style={{ display: 'block' }}>
                  Log In
                </Button>
              </>
            )}
          </Box>
        </Flex>
      </>
    );
  }
}

export default Home;
