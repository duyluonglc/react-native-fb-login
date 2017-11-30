# React Native Facebook webview login

[![Greenkeeper badge](https://badges.greenkeeper.io/duyluonglc/react-native-fb-login.svg)](https://greenkeeper.io/)
This package use webview to make oAuth with facebook, so you can logout then relogin with other facebook account easy by clear cookies

# Install

```js
npm install react-native-fb-login --save
or
yarn add react-native-fb-login
```

# Usage:

See example

# Logout

To logout use clear cookies by using https://github.com/shimohq/react-native-cookie

```js
import Cookie from 'react-native-cookie'

  logout() {
    Cookie.clear().then(() => {
      this.setState({ token: null })
    })
  }
 ```
