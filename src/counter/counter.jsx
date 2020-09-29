import React from 'react';

const Counter = (props) => {
  const {value, min, max, onValueChange} = props;
  function wheelHandler(evt, val) {
    evt.deltaY < 0 ? val++ : val--
    return onValueChange(val)
  }
  
  return <React.Fragment>
    <div className="description">
      <p>Текущее минимальное значение: {min}</p>
      <p>Текущее максимальное значение: {max}</p>
    </div>
    <div className="counter">
      <label htmlFor="input" className="input-label" title="set me">set me</label>
      <input type="button" className="decrease" value=" - " onClick={() => onValueChange(value - 1)}/>
      <input type="number" className="input" id="input" value={value} min={min} max={max} onChange={() => onValueChange(document.querySelector(`.input`).value)} onWheel={(evt) => wheelHandler(evt, document.querySelector(`.input`).value)}/>
      <input type="button" className="increase" value=" + " onClick={() => onValueChange(value + 1)}/>
    </div>
  </React.Fragment>
}

export default Counter;
