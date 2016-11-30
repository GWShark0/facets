import _ from 'lodash';
import React from 'react';
import './attribute.css';

function Attribute({name, max, onInput, value}) {
  const list = ['ticks', name].join('-');
  return (
    <div className="attribute">
      <span className="attribute__label">{name}:</span>
      <input
        className="attribute__range"
        type="range"
        list={list}
        max={max}
        onInput={onInput}
        value={value}
      />
      <datalist id={list}>
        {_.range(max + 1).map((n) => <option key={n}>{n}</option>)}
      </datalist>
      <input
        className="attribute__value"
        type="number"
        readOnly
        value={value}
      />
    </div>
  );
}

Attribute.defaultProps = {
  name: 'Attribute',
  max: 10
};

export default Attribute;
