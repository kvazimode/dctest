import React from 'react';

const Counter = (props) => {
  const {min, max} = props;

  return <React.Fragment>
    <form className="counter">
      <input type="button" className="decrease" value="decrease"/>
      <label htmlFor="input" className="input-label" title="set me"></label>
      <input type="number" className="input" id="input" min={min} max={max}/>
      <input type="button" className="increase" value="increase"/>
    </form>
  </React.Fragment>
}

export default Counter;
