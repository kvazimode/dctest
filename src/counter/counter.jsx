import React from 'react';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this._wheelHandler = this._wheelHandler.bind(this);
  }

  _wheelHandler(evt) {
    let val = this.inputRef.current.value;
    evt.deltaY < 0 ? val++ : val--;
    return this.props.onValueChange(val)
  }
  
  render() {
    const {min, max, value, onValueChange} = this.props;
    return <React.Fragment>
    <div className="description">
      <p>Текущее минимальное значение: {min}</p>
      <p>Текущее максимальное значение: {max}</p>
    </div>
    <div className="counter">
      <label htmlFor="input" className="input-label" title="set me">set me</label>
      <input type="button" className="decrease" value=" - " onClick={() => onValueChange(value - 1)}/>
      <input type="number"
        className="input"
        id="input"
        value={value}
        min={min}
        max={max}
        onChange={() => onValueChange(this.inputRef.current.value)}
        onWheel={(evt) => this._wheelHandler(evt)} ref={this.inputRef}
      />
      <input type="button" className="increase" value=" + " onClick={() => onValueChange(value + 1)}/>
    </div>
  </React.Fragment>
  }
}

export default Counter;
