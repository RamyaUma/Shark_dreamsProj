import "./BeforeLogin.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import  Login from '../Login/Login';
import Register from '../Register/Register';
import Timer from '../Timer/Timer';

function template() {
  return (
    <div className="before-login">
        <HashRouter>
            <div>
                 <Route path="/" exact  component={Login} />
                 <Route path="/Register"  component={Register} />
                 <Route path="/Timer"  component={Timer} />

            </div>
        </HashRouter>
    </div>
  );
};

export default template;
