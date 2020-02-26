import { createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

let initialState = {
    num: 1
}

// 第一个参数是reducer，第二个参数是初始化
// thunk处理异步
let store = createStore(reducer,initialState,applyMiddleware(thunk));

export default store;