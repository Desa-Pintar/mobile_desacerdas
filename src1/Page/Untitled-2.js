import React, { Component } from 'react';
import {
    AsyncStorage,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text
  } from 'react-native'
  const t = require('tcomb-form-native')
  
  const Form = t.form.Form
  
  const User = t.struct({
    email: t.String,
    password:  t.String
  })
  
  const options = {
    fields: {
      email: {
        autoCapitalize: 'none',
        autoCorrect: false
      },
      password: {
        autoCapitalize: 'none',
        password: true,
        autoCorrect: false
      }
    }
  }
  
 export default class login extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        value: {
          email: '',
          password: ''
        }
      }
    }
  
    componentWillUnmount() {
      this.setState = {
        value: {
          email: '',
          password: null
        }
      }
    }
  
    _onChange = (value) => {
      this.setState({
        value
      })
    }
    _handleAdd = () => {
      const value = this.refs.form.getValue();
      // If the form is valid...
      if (value) {
        const data = {
          username: value.email,
          password: value.password
        }
        // Serialize and post the data
        const json = JSON.stringify(data)
        fetch('http://192.168.0.108:3000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: json
        })
        .then((response) => response.json())
        .then((res) => {
          if (res.error) {
            alert(res.error)
          } else {
            AsyncStorage.setItem('jwt', res.token)
            alert(`Login Berhasil`)
            this.props.navigation.navigate("MenuUtama")
          }
        })
        .catch(() => {
          alert('Username/Password Salah');
        })
        .done()
      } else {
        alert('Please fix the errors listed and try again.')
      }
    }
  
    render() {
      return (
        <ScrollView style={styles.container}>

          <Form
            ref='form'
            options={options}
            type={User}
            value={this.state.value}
            onChange={this._onChange}
          />
          <TouchableHighlight onPress={this._handleAdd}>
            <Text style={[styles.button, styles.greenButton]}>Log In</Text>
          </TouchableHighlight>
        </ScrollView>
      )
    }
  };
  
  var styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      flexDirection: 'column'
    },
    button: {
      borderRadius: 4,
      padding: 20,
      textAlign: 'center',
      marginBottom: 20,
      color: '#fff'
    },
    greenButton: {
      backgroundColor: '#4CD964'
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  