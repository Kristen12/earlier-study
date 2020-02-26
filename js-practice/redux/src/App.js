import React from 'react';
import './App.css';
import store from './store';
import {add,reduce} from './action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <div>
        {props.children}
      </div>

    <div>
      <button>
          <Link to="/">首页</Link>
        </button>
        <button>
          <Link to="/home">Home页</Link>
        </button>
        <button>
          <Link to="/user">user页</Link>
        </button>
    </div>
      

      <div>{props.num}</div>
      {/* 异步情况 */}
      <button onClick={()=>{
        console.log('修改store中num的值');
        // 通过store.dispatch修改num
        // store.dispatch(add(2));
        props.add();
      }}>add</button>
      
      {/* 同步情况 */}
      <button onClick={()=>{
        store.dispatch(reduce());
      }}>reduce</button>
    </div>
  );
}

// 展示store，将state映射成props
let mapStateToProps = (state) =>{
  return {
    num: state.num
  }
}
export default connect(mapStateToProps,{add})(App);
