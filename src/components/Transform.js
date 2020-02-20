import React from 'react';

import '../assets/css/table_layout.css';
import Css from './Css';
import Target from './Target';

const Transform = () => {
  return (
    <table>
      <tr>
        <td style={{width: '50%'}}>
          <Css />
        </td>
        <td style={{width: '50%'}}>
          <Target />
        </td>
      </tr>
    </table>
  );
};

export default Transform;
