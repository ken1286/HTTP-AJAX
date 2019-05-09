import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  handleChanges = event => {
    this.setState( {
      friendInput: {
        ...this.state.friendInput,
      [event.target.name]: event.target.value
    }
    })
  }

  postFriend = (event) => {
    this.props.postFriend(this.state.friendInput)
    this.setState( {
      friendInput: {
        name: '',
        age: '',
        email: ''
      }
    })
  }


  render() { 
    return (
      <div>
        <form onSubmit={this.postFriend}>
          <input
            placeholder="name"
            name="name"
            type="text"
            value={this.state.friendInput.name}
            onChange={this.handleChanges}
          />
          
          <input 
            placeholder="age"
            name="age"
            type="text"
            value={this.state.friendInput.age}
            onChange={this.handleChanges}
          />
          <input 
            placeholder="email"
            name="email"
            type="text"
            value={this.state.friendInput.email}
            onChange={this.handleChanges}
          />
          <button type="submit" onClick={this.postFriend}>Submit</button>
        </form>
      </div>
      );
  }
}
 
export default FriendForm;