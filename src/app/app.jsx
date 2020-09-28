import React from 'react';
import Counter from '../counter/counter.jsx';

const App = (props) => {
  const {min, max} = props.setup;
  return <Counter min={min} max={max}/>;
};

export default App;
