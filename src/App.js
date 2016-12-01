import _ from 'lodash';
import React, { Component } from 'react';
import Attribute from './Attribute';
import AttributeGraph from './AttributeGraph';
import Remainder from './Remainder';
import './App.css';

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

  componentDidMount() {
    // randomized dummy data
    const distribution = _.shuffle([1, 2, 4, 8, 10, 8, 4, 2, 1]);
    const sampleAttributes = _.zipObject(ATTRIBUTES, distribution);
    this.setState({
      remainder: 0,
      attributes: sampleAttributes
    });
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
        <div className="controls">
          <Remainder value={this.state.remainder} />
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
        <AttributeGraph attributes={this.state.attributes} />
      </div>
    );
  }
}

export default App;
