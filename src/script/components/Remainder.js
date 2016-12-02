import React from 'react';
import '../../style/components/Remainder.css';

function Remainder({value}) {
  return (
    <div className="remainder">
      <span className="remainder__label">Points Remaining:</span>
      <input
        className="remainder__display"
        type="number"
        readOnly
        value={value}
      />
    </div>
  );
}

export default Remainder;
