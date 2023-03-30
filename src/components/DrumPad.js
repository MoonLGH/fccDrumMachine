import React from 'react';
import q from '../assets/media/Heater-1.mp3';
import w from '../assets/media/Heater-2.mp3';
import e from '../assets/media/Heater-3.mp3';
import a from '../assets/media/Heater-4.mp3';
import s from '../assets/media/Clap.mp3';
import d from '../assets/media/Open-HH.mp3';
import z from '../assets/media/Kick_n_Hat.mp3';
import x from '../assets/media/Kick.mp3';
import c from '../assets/media/Closed-HH.mp3';

const audioFiles = {
  Q: { id: 'Heater-1', src: q },
  W: { id: 'Heater-2', src: w },
  E: { id: 'Heater-3', src: e },
  A: { id: 'Heater-4', src: a },
  S: { id: 'Clap', src: s },
  D: { id: 'Open-HH', src: d },
  Z: { id: 'Kick-n-Hat', src: z },
  X: { id: 'Kick', src: x },
  C: { id: 'Closed-HH', src: c },
};
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.state = {
      displayText: ''
    };
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  handleDisplay(text) {
    this.setState({ displayText: text });
  }


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    this.audio.current.currentTime = 0;
    this.audio.current.play();
    this.handleDisplay(this.props.id);
  }

  render() {
    console.log(this.props)
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.props.onClick}>
        <audio ref={this.audio} className="clip" src={audioFiles[this.props.id].src}></audio>
        {this.props.id}
      </div>
    );
  }
}

export default DrumPad;
