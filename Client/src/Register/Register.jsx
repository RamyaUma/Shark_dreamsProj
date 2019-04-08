import "./Register.css";
import React from "react";

function template() {
  return (
    <div className="register container-fluid">
       <h3 className="text-center m-b-50">Registration</h3>
        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Name:</b>
            </div>
            <div className="col-sm-3">
                <input disabled={!this.state.isSave} value={this.state.dataObj.uid} className="form-control" onChange={this.fnChange.bind(this,"uid")} />
            </div>

        </div>

        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Password</b>
            </div>
            <div className="col-sm-3">
                <input type="password" value={this.state.dataObj.pwd} className="form-control"  onChange={this.fnChange.bind(this,"pwd")}/>
            </div>

        </div>

        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Email</b>
            </div>
            <div className="col-sm-3">
                <input value={this.state.dataObj.email} className="form-control"  onChange={this.fnChange.bind(this,"email")} />
            </div>

        </div>

        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Phone:</b>
            </div>
            <div className="col-sm-3">
                <input value={this.state.dataObj.phone} className="form-control"  onChange={this.fnChange.bind(this,'phone')} />
            </div>
        </div>

        <div className="row form-group">
          <div className="col-sm-12 text-center">
             {
                 this.state.isSave ?
              <input type="button" disabled={!this.state.isValid} className="btn  btn-primary" value='Register' onClick={this.fnRegister.bind(this)}/>
              :
              <input type="button" className="btn  btn-primary" value='update' onClick={this.fnUpdate.bind(this)}/>
                           
             }
         </div>
        </div>
        <div className="row form-group">
          <div className="col-sm-12 text-center">
              {this.state.msg}
         </div>
        </div>
    </div>
  );
};

export default template;
