import React from 'react';

const Counter = (props) => {
  const {value, min, max, onValueChange} = props;
  function wheelHandler(evt, val) {
    evt.deltaY < 0 ? val++ : val--
    return onValueChange(val)
  }
  
  return <React.Fragment>
    <label htmlFor="input" className="input-label" title="set me">set me</label><br/>
    <input type="button" className="decrease" value="decrease" onClick={() => onValueChange(value - 1)}/>
    <input type="number" className="input" id="input" value={value} min={min} max={max} onChange={() => onValueChange(document.querySelector(`.input`).value)} onWheel={(evt) => wheelHandler(evt, document.querySelector(`.input`).value)}/>
    <input type="button" className="increase" value="increase" onClick={() => onValueChange(value + 1)}/>
  </React.Fragment>
}

export default Counter;
