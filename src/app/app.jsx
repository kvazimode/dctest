import React from 'react';
import Counter from '../counter/counter.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.setup.init
    };
    this._handleValueChange = this._handleValueChange.bind(this);
  }

  _handleValueChange(value) {
    const {min, max} = this.props.setup;
    if (value >= min && value <= max) {
      this.setState({currentValue: value});
    }
  }

  render() {
    const {min, max} = this.props.setup;
    return (
      <Counter value={this.state.currentValue} min={min} max={max} onValueChange={this._handleValueChange}/>
    )
  }
};

export default App;
