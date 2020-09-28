import React from 'react';
import Counter from '../counter/counter.jsx';

const App = (props) => {
  const {init, min, max} = props.setup;
  return <Counter init={init} min={min} max={max} />;
};

export default App;
