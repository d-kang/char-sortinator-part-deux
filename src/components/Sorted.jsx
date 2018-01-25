import React from 'react';

const SortedTable = ({ sorted }) =>
  <div>
    { sorted.map(([input, output], i) =>
      <div key={i}>{`${input}      ${output}`}</div>)
    }
  </div>

export default SortedTable;
