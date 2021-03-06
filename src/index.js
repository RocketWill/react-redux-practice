import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
// 引入外部中間件
import logger from 'redux-logger';

// thunk
import thunk from 'redux-thunk';

import promise from 'redux-promise-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { increment, decrement } from './actions/action';
import { Provider } from "react-redux";

// const logger = store => next => action => {
//     console.log('dispatching', action);
//     let result = next(action); //調用下一個中間件（error）
//     console.log('next state', store.getState());
//     return result;
// };

// const error = store => next => action => {
//     try{
//         next(action); //到 reducer
//     }catch(e){
//         console.log(e);
//     }
// }

//白話文
const logger_exp = function(store){
    return function(next){
        return function(action){
            console.log('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            return result;
        }
    }
}

//中間件日誌紀錄
//const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk, promise)); //依序執行
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk, promise)));

//HMR
if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }


//store.subscribe( () => console.log("State Update!", store.getState()) );

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
}

//只在生產環境生效
//registerServiceWorker();
    


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
