import React    from "react";
import template from "./Register.jsx";
import ServerCall from '../services/ServerCall';
class Register extends React.Component {
  constructor(){
    super();
    this.state={
       'dataObj':{
          'uid':'',
          'pwd':'',
          'email':'',
          'phone':''
       },
       'msg':'',
       'isSave':true
    }
    this.fnValidate=this.fnValidate.bind(this);
  }
  render() {
    return template.call(this);
  }
  componentWillReceiveProps(props,state){
      debugger;
      if(props.rd){
        const {uid,pwd,email,phone,id}=props.rd;
          this.setState({
            'dataObj':{
              'uid':uid,
              'pwd':pwd,
              'email':email,
              'phone':phone,
              'id':id
           },
           isSave:false,
           isValid:false
          })
      }
  }

  // fnUpdate(){
  //   debugger;
  //     ServerCall.fnPostReq('student/update',this.state.dataObj)
  //     .then((res)=>{
  //       debugger
  //       if(res.data.affectedRows > 0){
  //         this.props.gu();
  //         this.setState({
  //           'msg':"Success",
  //           'dataObj':{
  //             'n':'',
  //             'e':'',
  //             'p':'',
  //             'a':''
  //          },
  //          isSave:true
  //         }) 
  //   }
  //     })
  //     .catch((res)=>{
  //       debugger;
  //     })
  // }

  fnRegister(){
    debugger;
    ServerCall.fnPostReq('users/register',this.state.dataObj)
    .then((res)=>{
      debugger;
      if(res.data.affectedRows > 0){
            // this.props.gu();
            this.setState({
              'msg':"Success",
              'dataObj':{
                'uid':'',
                'pwd':'',
                'email':'',
                'phone':''
             }
            }) 
      }
    })
    .catch((res)=>{
      debugger;
    })
  }
  fnChange(key,e){
      debugger;
      this.setState({
        dataObj:{
          ...this.state.dataObj,
          [key]:e.target.value
        }
      },this.fnValidate)
  }
 
  fnValidate(){
    debugger;
     const {uid,pwd,email,phone}= this.state.dataObj
      if(uid && pwd && email && phone ){
        this.setState({
          'isValid':true
        })
      }else{
        this.setState({
          'isValid':false
        })
      }
  }
}

export default Register;
