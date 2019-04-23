import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.css';
import * as types from './actions/action';
import {bindActionCreators} from 'redux';
import User from './components/User';

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }
  render(){
    // const {dispatch} = this.props;
    const {increment, decrement} = this.props;
    return (
      
      <div className="container">
        <h1 className='jumbotron-heading text-center'>{this.props.counter}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={ () => increment("YONGGG") }>Increase</button>
          <button className="btn btn-danger mr-2" onClick={() => decrement()}>Decrease</button>
        </p>

        <User />
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch);
}


// export default connect(mapStateToProps, {increment, decrement})(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
