import React from 'react';

class UpdateForm extends React.Component {
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

  updateFriend = (event) => {
    event.preventDefault();
    this.props.updateFriend(this.state.friendInput, this.props.activeFriend)
    this.setState( {
      friendInput: {
        name: '',
        age: '',
        email: ''
      },
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
          <button type="submit" onClick={this.updateFriend}>Submit</button>
        </form>
      </div>
      );
  }
}
 
export default UpdateForm;