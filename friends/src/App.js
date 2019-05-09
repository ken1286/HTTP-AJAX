import React from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Friend from './components/Friend';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  postFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => { 
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(err => {console.log(err)})
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {/* <FriendsList friends={this.state.friends} postFriend={this.postFriend} /> */}

        <Route 
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends} 
              postFriend={this.postFriend} />
          )}
        />

        <Route
          path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />)}
        />
      </div>
    );
  }
}

export default App;
