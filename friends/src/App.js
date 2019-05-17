import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Friend from './components/Friend';

import { getFriends, postFriend } from './actions';
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount() {
    this.props.getFriends();
  }

  // postFriend = friend => {
  //   axios
  //     .post(`http://localhost:5000/friends`, friend)
  //     .then(response => { 
  //       this.setState({ friends: response.data });
  //       console.log(response);
  //     })
  //     .catch(err => {console.log(err)})
  // }

  // deleteFriend = id => {
  //   axios
  //     .delete(`http://localhost:5000/friends/${id}`)
  //     .then(res => {
  //       this.setState({ friends: res.data });
  //       this.props.history.push('/');
  //     })
  //     .catch(err => console.log(err));
  // }

  // updateFriend = (updatedFriend, friend) => {
  //   axios
  //     .put(`http://localhost:5000/friends/${friend.id}`, updatedFriend)
  //     .then(res => {
  //       this.setState({friends: res.data})
  //       this.props.history.push('/')})
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return (
      <h2>LOADING...</h2>
      )
    }
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
              friends={this.props.friends} 
              postFriend={this.props.postFriend} />
          )}
        />

        <Route
          path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.props.friends}
              deleteFriend={this.deleteFriend}
              updateFriend={this.updateFriend}
            />)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isFetching: state.isFetching
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getFriends, postFriend
  }
)(App);
