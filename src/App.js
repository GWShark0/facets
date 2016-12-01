import _ from 'lodash';
import React, { Component } from 'react';
import Remainder from './Remainder';
import Attribute from './Attribute';

const REMAINDER = 40;
const ATTRIBUTES = [
  'strength',
  'perception',
  'endurance',
  'charisma',
  'intelligence',
  'agility',
  'luck'
];

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAttributeInput = this.handleAttributeInput.bind(this);
    this.state = {
      remainder: REMAINDER,
      attributes: _.transform(ATTRIBUTES, (result, attribute) => {
        result[attribute] = 0;
      }, {})
    };
  }

  handleAttributeInput(event, attribute) {
    const oldValue = this.state.attributes[attribute];
    const newValue = _.parseInt(event.target.value);
    const delta = newValue - oldValue;
    const remainder = this.state.remainder - delta;

    if (remainder >= 0) {
      this.setState({
        remainder: remainder,
        attributes: _.assign({}, this.state.attributes, {[attribute]: newValue})
      });
    }
  }

  render() {
    return (
      <div>
        <Remainder value={this.state.remainder} />
        <div className="attribute-container">
          {_.map(this.state.attributes, (value, name) => (
            <Attribute
              name={name}
              value={value}
              key={name}
              onInput={(event) => {
                this.handleAttributeInput(event, name);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
