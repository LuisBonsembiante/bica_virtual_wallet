import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";

const RouterComponent = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar>
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main" hideNavBar>
                    <Scene key="login" component={Main}  initial/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;