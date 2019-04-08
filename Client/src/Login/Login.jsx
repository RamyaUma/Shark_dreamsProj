import "./Login.css";
import React from "react";

function template() {
  return (
    <div className="login">
        <div className="container-fluid text-center">
        <div className="row form-group">
            <div className="col-sm-5 text-right ustl">
                <b>User Name</b>
            </div>
            <div className="col-sm-3">
                <input className="form-control" onChange={this.fnChange.bind(this,"uid")} />
            </div>
        </div>
        <div className="row form-group">
            <div className="col-sm-5 text-right ustl">
                <b>Password</b>
            </div>
            <div className="col-sm-3">
                <input type="password" className="form-control" onChange={this.fnChange.bind(this,"pwd")}/>
            </div>
        </div>
        <div className="row">
          <div className='cols-sm-6 container text-center Btn'>
            <button disabled={!this.state.isValid} className="login-btn btn btn-primary" onClick={this.fnLogin.bind(this)}>Login</button>
            <a href="#/Register">Register</a>
          </div>
        </div>
        <div className="row">
          <div className='cols-sm-12  text-center text-danger'>
             {this.state.msg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default template;
