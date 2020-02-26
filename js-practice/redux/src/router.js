import React, { Component } from 'react';
import  {HashRouter as Router, Route} from 'react-router-dom';
import App from './App.js';
import Home from './page/Home'
import User from './page/User'

class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/user" component={User}></Route>
                    </App>
                </Router>
            </div>
        );
    }
}

export default IRouter;
