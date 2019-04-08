import React    from "react";
import template from "./Timer.jsx";
import ServerCall from '../services/ServerCall';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      timerStarted :false,
      timerStoped : true,
      hours :0,
      minutes :0,
      seconds:0,
      caputures:0,
      capt:[],
      isValid:false,
      dataObj:{}
    }
   
  }

  handleTimerStart(e){
    e.preventDefault();
    if(!this.state.timerStarted){
      
   this.timer= setInterval(()=>{

        this.setState({timerStarted:true,timerStoped:false,isValid:true});
        if(this.state.timerStarted){
          
          if(this.state.seconds >= 60){
            this.setState((prevState) =>({minutes : prevState.minutes + 1 ,seconds:0}))
          }
          if(this.state.minutes >=60){
            this.setState((prevState) =>({hours :prevState.hours + 1, minutes:0, seconds : 0 }))
          }
          this.setState((prevState) =>({seconds : prevState.seconds +1}))     
        }
      
      },1000)
      }
   
  }

  handleTimerStop(e){
    e.preventDefault();
    this.setState({timerStarted : false,timerStoped:true,isValid:false})
    clearInterval(this.timer);
  }

  handleTimerCaptures(){
    debugger;
    ServerCall.fnPostReq('users/capttimer',this.state.dataObj)
    .then((res)=>{
      debugger;
      if(res.data.affectedRows > 0){
            // this.props.gu();
            this.setState({
              'dataObj':{capt:[this.state.hours + " : " + this.state.minutes +" : "+ this.state.seconds],
                        desc:this.refs.desc.value}
            }) 
      }
    })
    .catch((res)=>{
      debugger;
    })     
    // this.setState({
    //   ...this.state.dataObj,
    //   dataObj:{capt:this.state.hours + " : " + this.state.minutes +" : "+ this.state.seconds,desc:this.refs.desc.value}
    // })  
    console.log({capt:this.state.hours + " : " + this.state.minutes +" : "+ this.state.seconds,desc:this.refs.desc.value});

    }

  handleTimerReset(e){
    e.preventDefault();
    this.setState({
      timerStarted:false,timerStoped:true,isValid:false,
      seconds:0,minutes:0,hours:0
    })
    clearInterval(this.timer)
  }
  render() {
    return template.call(this);
  }
}

export default Timer;
