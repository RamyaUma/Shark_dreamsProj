import React    from "react";
import template from "./BeforeLogin.jsx";

class BeforeLogin extends React.Component {
  constructor(){
    super();
    this.state={
    isLogin:false
  }
}

  render() {
    return template.call(this);
  }
}

export default BeforeLogin;
