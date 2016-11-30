import React, { Component } from 'react';
import Remainder from './Remainder';
import Attribute from './Attribute';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remainder: 10,
      attributes: [
        {
          name: 'strength',
          value: 0
        },
        {
          name: 'intelligence',
          value: 0
        },
        {
          name: 'luck',
          value: 0
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <Remainder value={this.state.remainder} />
        <div className="attribute-container">
          {this.state.attributes.map((attribute) => (
            <Attribute {...attribute} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
