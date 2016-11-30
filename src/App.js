import _ from 'lodash';
import React, { Component } from 'react';
import Remainder from './Remainder';
import Attribute from './Attribute';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAttributeInput = this.handleAttributeInput.bind(this);
    this.state = {
      remainder: 10,
      attributes: {
        strength: 0,
        intelligence: 0,
        luck: 0
      }
    };
  }

  handleAttributeInput(event, attribute) {
    const value = event.target.value;
    this.setState({
      attributes: _.assign({}, this.state.attributes, {[attribute]: value})
    });
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
