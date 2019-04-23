import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.css';
import { increment, decrement } from './actions/action';
import {bindActionCreators} from 'redux';
class App extends Component {
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

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({increment}, dispatch);
// }


export default connect(mapStateToProps, {increment, decrement})(App);
