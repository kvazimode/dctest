import React from 'react';

const Counter = (props) => {
  const {init, min, max} = props;
  
  return <React.Fragment>
    <form className="counter">
      <label htmlFor="input" className="input-label" title="set me">set me</label><br/>
      <input type="button" className="decrease" value="decrease" />
      <input type="number" className="input" id="input" defaultValue={init} min={min} max={max}/>
      <input type="button" className="increase" value="increase"/>
    </form>
  </React.Fragment>
}

export default Counter;
