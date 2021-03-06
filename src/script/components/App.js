import { assign, map, transform } from 'lodash';
import React, { Component } from 'react';
import Attribute from './Attribute';
import AttributeGraph from './AttributeGraph';
import Remainder from './Remainder';
import '../../style/components/App.css';
import githubIcon from '../../image/github.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleAttributeInput = this.handleAttributeInput.bind(this);
    this.state = {
      remainder: props.pointsAvailable,
      attributes: transform(props.attributes, (result, attribute) => {
        result[attribute] = 0;
      }, {})
    };
  }

  handleAttributeInput(event, attribute) {
    const oldValue = this.state.attributes[attribute];
    const newValue = parseInt(event.target.value, 10);
    const delta = newValue - oldValue;
    const remainder = this.state.remainder - delta;

    if (remainder >= 0) {
      this.setState({
        remainder: remainder,
        attributes: assign({}, this.state.attributes, {[attribute]: newValue})
      });
    }
  }

  render() {
    return (
      <div className="demo">
        <a href="https://github.com/GWShark0/facets">
          <img className="github" src={githubIcon} alt="GitHub" />
        </a>
        <div className="controls">
          <Remainder value={this.state.remainder} />
          {map(this.state.attributes, (value, name) => (
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
