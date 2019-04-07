import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider, consolidateStreamedStyles } from 'styled-components';
import { UserSession, AppConfig } from 'blockstack';
import { configure } from 'radiks';

const appConfig = new AppConfig(['store_write', 'publish_data'], 'http://localhost:5000');
const userSession = new UserSession({ appConfig });

const { User } = require('../models');
const mongoose = require('mongoose');

console.log('mongoose stuff initialized')

appConfig.use((req, res, next) => {
  console.log('use for mongoose callback')
  if (mongoose.connection.readyState) {
    console.log('if (mongoose.connection.readyState)')
    next();
  } else {
    console.log('else (mongoose.connection.readyState)')
    require('./mongo')().then(() => next());
    console.log('else (mongoose.connection.readyState)')
  }
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {
      userSession,
    };
    
    configure({
      apiServer: process.env.RADIKS_API_SERVER,
      userSession,
    });
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentWillMount() {
  configure({
  apiServer: process.env.RADIKS_API_SERVER,
  userSession,
});
  }

  render() {
    const {
      Component, pageProps,
    } = this.props;

    return (
      <ThemeProvider theme={{}}>
        <Container>
          <Component {...pageProps} serverCookies={this.props.cookies} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
