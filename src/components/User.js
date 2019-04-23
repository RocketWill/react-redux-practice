import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/action';


class User extends Component {

  render() {
    const {getUser} = this.props;
    const {error, isFetching, user} = this.props.user;
    //console.log(isFetching);
    //console.log(user);

    let data;
    if (error){
        data = error;
    }else if (isFetching){
        //console.log("loading");
        data = "Loading...";
    }else{
        data = Object.values(user);
    }
    
    console.log(data);

    return (
      <div>
        <h1 className="jumbotron-heading text-center">{data}</h1>
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