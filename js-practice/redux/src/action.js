import axios from 'axios';
import store from './store';

// 异步情况 return一个函数
export let add = (count) => {
    // return {
    //     type:'ADD',
    //     payload:count
    // }
    return () => {
        console.log('进入action');
        // public路径/
        axios.get('/test.json').then((res)=>{
            // dispatch触发函数传到reducer
            store.dispatch({
                type:'ADD',
                payload:res.data.data
            })
        })
    }
}

// 同步情况 return一个对象
export let reduce = () => {
    console.log("进入action");
    return {
        type:'REDUCE'
    }
}
