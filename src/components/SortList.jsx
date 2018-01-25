import React from 'react';
import SortItem from './SortItem';
const SortList = ({ sorted }) =>
  <table>
    <thead>
      <tr>
        <td>input</td>
        <td>output</td>
      </tr>
    </thead>
    { sorted.map((tuple, i) =>
      <SortItem key={i} tuple={tuple}/>
    )
    }
  </table>

export default SortList;
