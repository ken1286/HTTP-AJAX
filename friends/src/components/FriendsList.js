import React from 'react';
import axios from 'axios';
import Friend from './Friend';

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

  render() { 
    return (
    <div>
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