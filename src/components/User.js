import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/action';


class User extends Component {

  render() {
    const {getUser, user} = this.props;
    console.log(Object.values(user)[0]);
    return (
      <div>
        <h1 className="jumbotron-heading text-center">{Object.values(user)[0]}</h1>
        <p className="text-center">
            <button className="btn btn-success mr-2" onClick={() => getUser()}>GET RANDOM USER</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  };
};

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, {getUser})(User);