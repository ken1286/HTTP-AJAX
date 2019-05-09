import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
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
    axios.post(`http://localhost:5000/friends`, friend)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err)})
  }

  render() { 
    return (
    <div>
      <FriendForm postFriend={this.postFriend} />

      {this.state.friends.map( friend => {
        return (
          <Friend 
            name={friend.name}
            age={friend.age}
            email={friend.email}
          /> 
        )
      })
      
      }
    </div>

      );
  }
}
 
export default FriendsList;