import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';

const audioFiles = {
  Q: { id: 'Heater-1', src: './assets/media/Heater-1.mp3' },
  W: { id: 'Heater-2', src: './assets/media/Heater-2.mp3' },
  E: { id: 'Heater-3', src: './assets/media/Heater-3.mp3' },
  A: { id: 'Heater-4', src: './assets/media/Heater-4.mp3' },
  S: { id: 'Clap', src: './assets/media/Clap.mp3' },
  D: { id: 'Open-HH', src: './assets/media/Open-HH.mp3' },
  Z: { id: 'Kick-n-Hat', src: './assets/media/Kick_n_Hat.mp3' },
  X: { id: 'Kick', src: './assets/media/Kick.mp3' },
  C: { id: 'Closed-HH', src: './assets/media/Closed-HH.mp3' },
};

function DrumMachine() {
  const [displayText, setDisplayText] = useState('');

  const handlePadClick = (audioId) => {
    const audio = document.querySelector(`#${audioId.target.id} > audio`);
    setDisplayText(audioFiles[audioId.target.id].id);
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (audioFiles.hasOwnProperty(key)) {
      handlePadClick({ target: { id: key } });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      {Object.entries(audioFiles).map(([key, value]) => (
        <DrumPad key={key} id={key} src={value.src} onClick={handlePadClick} />
      ))}
      <div id="instructions">(Click or Press key to play)</div>
    </div>
  );
}

export default DrumMachine;
