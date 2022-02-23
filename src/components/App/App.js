import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import LoginHeader from '../login-header/login-header'
import LoginForm from '../login-form/login-form'
import Sidebar from '../sidebar/sidebar'

const customStyle = {
    position: 'absolute',
    textAlign: 'center',
    width: '100%'
}

const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    // console.log(res.data);
    return res.data;
}

export default class App extends Component {
  state = {
    email: 'none',
    name: 'none',
    profilePic: ''
  }

  onSubmitted = (resp) => {
    console.log(resp);
    console.log(resp.profileObj);
    // if (resp.profileObj.email)
    this.setState({
      email: resp.profileObj.email,
      username: resp.profileObj.name,
      profilePic: resp.profileObj.imageUrl,
    });
  }

  render() {
    const { username, profilePic } = this.state;

    return (
      <React.Fragment>
        <Sidebar data={this.state}/>
      <div className="container">
        <div className="position-absolute top-50 start-50 translate-middle">
            <LoginHeader />
            <LoginForm onSubmitted={this.onSubmitted}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
}