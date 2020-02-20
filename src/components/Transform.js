import React from 'react';

import '../assets/css/table_layout.css';
import CSS from './CSS';
import Target from './Target';

const Transform = () => {
  return (
    <table>
      <tr>
        <td style={{width: '50%'}}>
          <CSS />
        </td>
        <td style={{width: '50%'}}>
          <Target />
        </td>
      </tr>
    </table>
  );
};

export default Transform;
