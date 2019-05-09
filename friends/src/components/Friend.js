import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const selectedFriend = this.findSelected(parseInt(id, 10));
    this.setState({ friend: selectedFriend })
  }
  
  findSelected = id => {
    let selected = {};
    this.props.friends.forEach( friend => {
      if(friend.id === id) {
        selected = friend
      }
    })
    return selected;
  }

  deleteFriend = event => {
    event.preventDefault();
    this.props.deleteFriend(this.state.friend.id)
  } 

  render() {
    
    return (
      <div>
        <h2>{this.state.friend.name}</h2>
        <p>{this.state.friend.age}</p>
        <p>{this.state.friend.email}</p>

      <button onClick={this.updateFriend}>Update Friend</button>
      <button onClick={this.deleteFriend}>Delete Friend</button>
      </div>
    )
  } 
}

export default Friend;