import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Pad.scss';


/**
 * Pad component
 */
class Pad extends Component {
  /**
   * @constructor
   * Bind 'this' to functions
   */
  constructor(props) {
    super(props);

    const context = this.props.audioContext;

    this.stopTimeout = 0;
    this.playing = false;
    this.oscillator = null;
    this.gainNode = null;

    if ('ontouchstart' in window) {
      this.touchEvents = true;
    }

    this.state = {
      active: false,
    };

    this.toggleSound = this.toggleSound.bind(this);
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUpOutside = this.onMouseUpOutside.bind(this);
  }


  /**
   * Bind function to document to stop sound on mouseup
   * @return {undefined} - undefined
   */
  componentDidMount() {
    const enterTriggerEvent = this.touchEvents ? 'touchstart' : 'mousedown';
    const moveTriggerEvent = this.touchEvents ? 'touchmove' : 'mousemove';
    const exitTriggerEvent = this.touchEvents ? 'touchend' : 'mouseup';

    document.addEventListener(enterTriggerEvent, this.onMouseDown);
    document.addEventListener(moveTriggerEvent, this.onMouseMove);
    document.addEventListener(exitTriggerEvent, this.onMouseUpOutside);
  }


  /**
   * Unbind functions when component is unmounted
   * @return {undefined} - undefined
   */
  componentWillUnmount() {
    const enterTriggerEvent = this.touchEvents ? 'touchstart' : 'mousedown';
    const moveTriggerEvent = this.touchEvents ? 'touchmove' : 'mousemove';
    const exitTriggerEvent = this.touchEvents ? 'touchend' : 'mouseup';

    document.removeEventListener(enterTriggerEvent, this.onMouseDown);
    document.removeEventListener(moveTriggerEvent, this.onMouseMove);
    document.removeEventListener(exitTriggerEvent, this.onMouseUpOutside);
  }


  /**
   * Plays/stops the sound
   * @param {Object} e - A mouse event
   * @return {undefined} - undefined
   */
  toggleSound(e) {
    clearTimeout(this.stopTimeout);

    const event = e.nativeEvent || e;

    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.mouseDown = true;

      if (!this.playing) {
        this.playSound();
      }
    } else if (event.type === 'mouseup' || event.type === 'touchend') {
      this.mouseDown = false;

      if (this.playing) {
        this.stopSound();
      }
    }
  }


  /**
   * Plays the sound
   * @return {undefined} - undefined
   */
  playSound() {
    const context = this.props.audioContext;

    this.playing = true;
    this.setState({ active: true });
    this.oscillator = context.createOscillator();

    if (this.props.sound.type === 'built-in') {
      this.oscillator.type = this.props.sound.value;
    } else if (this.props.sound.type === 'custom') {
      const real = this.props.sound.value;
      const imag = new Float32Array(real.length);
      const customSound = context.createPeriodicWave(real, imag);

      this.oscillator.setPeriodicWave(customSound);
    }

    this.gainNode = context.createGain();
    this.oscillator.connect(this.gainNode);
    this.oscillator.frequency.value = this.props.frequency;
    this.gainNode.connect(context.destination);
    this.gainNode.gain.setValueAtTime(1, context.currentTime);
    this.oscillator.start();
  }


  /**
   * Stops the sound
   * @return {undefined} - undefined
   */
  stopSound() {
    const context = this.props.audioContext;

    this.setState({ active: false });
    this.playing = false;
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 1);
    this.oscillator.stop(context.currentTime + 1);
    this.stopTimeout = setTimeout(() => {
      this.oscillator.stop();
    }, 1000);
  }


  /**
   * Document listener for mouse down
   * @return {undefined} - undefined
   */
  onMouseDown() {
    this.mouseDown = true;
  }


  /**
   * Plays the sound when the screen is pressed and a key is dragged over
   * @return {undefined} - undefined
   */
  onMouseMove(e) {
    const event = e.nativeEvent || e;
    let overNode = false;

    if (this.mouseDown) {
      if (this.touchEvents) {
        const touches = event.touches;

        for (let i = 0; i < touches.length; i++) {
          const target = document.elementFromPoint(touches[i].clientX, touches[i].clientY);

          if (target && target.isEqualNode(this.node)) {
            overNode = true;
            break;
          }
        }
      } else {
        const target = e.target;

        if (target && target.isEqualNode(this.node)) {
          overNode = true;
        }
      }

      if (overNode) {
        if (!this.playing) {
          this.playSound();
        }
      } else if (this.playing) {
        this.stopSound();
      }
    }
  }


  /**
   * Stops the sounds when the user releases outside the pad
   * @return {undefined} - undefined
   */
  onMouseUpOutside(e) {
    this.mouseDown = false;

    if (this.playing && !e.target.isEqualNode(this.node)) {
      this.toggleSound(e);
    }
  }


  /**
   * Renders component
   * @return {ReactElement} - The component
   */
  render() {
    const activeClass = this.state.active ? style.active : '';
    const hitClassName =
      `hit-area-${this.props.index} ${style.hitArea} ${activeClass}`;
    const mouseDownHandler = !this.touchEvents ? this.toggleSound : null;
    const mouseUpHandler = !this.touchEvents ? this.toggleSound : null;
    const touchStartHandler = this.touchEvents ? this.toggleSound : null;
    const touchEndHandler = this.touchEvents ? this.toggleSound : null;

    return (
      <div className={style.wrapper}>
        <div
          className={hitClassName}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
          onTouchStart={touchStartHandler}
          onTouchEnd={touchEndHandler}
          ref={(node) => { this.node = node; }}
        />
      </div>
    );
  }
}


/**
 * PropTypes
 * @prop {Object} audioContext - The browser audioContext object
 * @prop {Number} frequency - The frequency of the sound should be played at
 * @prop {Number} index - The index of the component
 * @prop {Object} sound - An object containing sound data
 */
Pad.propTypes = {
  audioContext: PropTypes.object.isRequired,
  frequency: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  sound: PropTypes.object.isRequired,
};

export default Pad;
