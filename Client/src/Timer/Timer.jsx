import "./Timer.css";
import React from "react";

function template() {
  return (
    <div className='container-fluid Timer'>
      <h2 className='text-center'>React Based Timer</h2>
      <div>
        {(this.state.hours < 10 ? '0' + this.state.hours : this.state.hours) + " : " +
          (this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes) + " : " +
          (this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds)}
      </div>
      <div className='Timer'>
        {
          !this.state.isValid ?
            <button className='btn btn-success' onClick={this.handleTimerStart.bind(this)}>Start Timer</button>
            : <button className='btn btn-warning' onClick={this.handleTimerStop.bind(this)}>Stop Timer</button>
        }


        {/* <button className='btn btn-info' onClick={this.handleTimerCaptures.bind(this)}>Capture Timer</button> */}
        <button className='btn btn-danger' onClick={this.handleTimerReset}>Reset</button>
      </div>

      <div className='timer-captures'>
        {
          this.state.capt.map((timer, index) => {
            return <p>Capture : {index + 1}----->{timer} sc</p>
          })
        }
      </div>
      {/* <button className='btn btn-success' fn={this.props.fnSubmit}>Submit</button> */}

      <div class="myStyl">
      <span>Description:</span> <input ref="desc"/> <input type="button" value="Save" onClick={this.handleTimerCaptures.bind(this)}/>
      </div>

    </div>
  );
};

export default template;
