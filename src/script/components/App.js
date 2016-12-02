import _ from 'lodash';
import React, { Component } from 'react';
import Attribute from './Attribute';
import AttributeGraph from './AttributeGraph';
import Remainder from './Remainder';
import '../../style/components/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAttributeInput = this.handleAttributeInput.bind(this);
    this.state = {
      remainder: props.pointsAvailable,
      attributes: _.transform(props.attributes, (result, attribute) => {
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
      <div className="demo">
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
