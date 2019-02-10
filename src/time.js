import React, {Component} from 'react';

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString().split(' ')[1]
    };
  }
  
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  tick() {
    this.setState({
      time: new Date().toLocaleString().split(' ')[1]
    });
  }
  
  render() {
    return (
      <div className="main-header--middle" id="time">{this.state.time}</div>
    );
  }
}

