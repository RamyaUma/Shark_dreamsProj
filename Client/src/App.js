import React, { Component } from 'react';
import './App.css';
import Timer from './Timer/Timer';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BeforeLogin from './BeforeLogin/BeforeLogin';
import ServerCall from './services/ServerCall';

class App extends Component {
  constructor(){
    super();
    this.state={
      'data':[ ]
    }
    this.fnGetUsers=this.fnGetUsers.bind(this);
  }

  fnGetUsers(){
    debugger;
    ServerCall.fnPostReq('users/register')
    .then((res)=>{
      this.setState({
        'data':res.data,
        'rowData':undefined
      })
    })
    .catch((res)=>{
      this.setState({
        'data':[]
      })
    })
  }

  render() {
 
    return (
      <div className="App">
         <Header />
            <BeforeLogin gu={this.fnGetUsers}/>
         <Footer />
      </div>
    );
  }
}

export default App;
