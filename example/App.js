/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import FacebookLogin from 'react-native-fb-login'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  onLoginSuccess (response) {
    this.setState({ response })
  }

  logout () {
    this.setState({ response: null })
  }

  render () {
    return (
      <View style={styles.container}>
        {!this.state.response
          ? (
            <TouchableOpacity style={{ borderRadius: 5, backgroundColor: 'orange', height: 30, width: 100, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.refs.facebookLogin.show()}>
              <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
          )
          : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ margin: 10 }}>{JSON.stringify(this.state.response, null, 4)}</Text>
              <TouchableOpacity style={{ borderRadius: 5, backgroundColor: 'green', height: 30, width: 100, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.logout()}>
                <Text style={{ color: 'white' }}>Logout</Text>
              </TouchableOpacity>
            </View>
          )
        }
        <FacebookLogin
          ref='facebookLogin'
          clientId='123456789'
          redirectURI='http://www.example.com'
          onLoginSuccess={(response) => this.onLoginSuccess(response)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
