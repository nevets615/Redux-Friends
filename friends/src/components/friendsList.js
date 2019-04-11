import React from 'react';
import { connect } from 'react-redux';

import { addFriends, toggleFriends, filterFriends } from '../actions';

class FriendsList extends React.Component {
  state = {
    newFriend: ''
  };

  handleChanges = e => {
    this.setState({
      newFriend: e.target.value
    });
  };

  addFriends = e => {
    e.preventDefault();
    this.props.addFriends(this.state.newFriend);
    this.setState({ newFriend: '' });
  };

  toggleFriends = id => {
    this.props.toggleFriends(id);
  };

  filterFriends = id => {
    this.props.filterFriends(id);
  }

  render() {
    return (
      <>
       <h2>{this.props.normalProp}</h2>
        <div className="Friends-list">

          {this.props.friends &&
            this.props.friends.map((friend, index) => <h3>{friend.task}</h3>)}
        </div>
        <input
          type="text"
          value={this.state.newFriend}
          placeholder="Add Friend"
          onChange={this.handleChanges}
        />
        <button onClick={this.addFriends}>Add todo</button>
        <button onClick={this.filterFriends}>Clear</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addFriends } 
)(FriendsList);