import { combineReducers } from 'redux';

// 接受老的state和action，返回新的修改的state
// state需传默认值,若store中初始值比默认值大，则为默认值
let num = (state=0, action) => {
    console.log(state,"state",action,"action");
    switch (action.type) {
        case 'ADD':
            return state+action.payload;
        case 'REDUCE':
            return state-1;
        default:
            return state
    }
}

// 将多个reducer一起导出
export default combineReducers({
    num
});