import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';
import { Route } from 'react-router-dom';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  routeToFriend = (event, friend) => {
    event.preventDefault();
    this.props.history.push(`/friends/${friend.id}`)
  }

  render() { 
    return (
    <div>
      <FriendForm postFriend={this.props.postFriend} />

      {this.props.friends.map( friend => {
        return (
          <div onClick={(event) => this.routeToFriend(event, friend)} >
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        )
      })
    }
    </div>

    );
  }
}
 
export default FriendsList;