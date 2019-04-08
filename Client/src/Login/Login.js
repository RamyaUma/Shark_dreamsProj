import React    from "react";
import template from "./Login.jsx";
import ServerCall from '../services/ServerCall'
class Login extends React.Component {
  constructor(){
    super();
    this.state={
      'dataObj':{
         'uid':'',
         'pwd':''
      },
      'msg':'',
      'isValid':false
   }
   this.fnValidate=this.fnValidate.bind(this);
 }
  render() {
    return template.call(this);
  }

  fnChange(key,e){
    this.setState({
      dataObj:{
        ...this.state.dataObj,
        [key]:e.target.value
      }
    },this.fnValidate)
}

fnValidate(){
   const {uid,pwd}= this.state.dataObj
   if(uid && pwd){
        this.setState({
          'isValid':true
        })
   }else{
    this.setState({
      'isValid':false
    })
   }
}


        fnLogin(){
          debugger;
          ServerCall.fnPostReq('users/login',this.state.dataObj)
          .then((res)=>{
            debugger;
            if(res.data && res.data.length > 0){
                window.location.href="#/Timer";
            }else{
              this.setState({
                'msg':'please check entered uid or pwd'
              })
            }
          })
          .catch((res)=>{
            debugger;
          })
        }

}

export default Login;
