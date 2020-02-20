import React from 'react';

import '../assets/css/table_layout.css';
import Css from './Css';
import RN from './RN';

const Transform = () => {
  return (
    <table>
      <tr>
        <td style={{width: '50%'}}>
          <Css />
        </td>
        <td style={{width: '50%'}}>
          <RN />
        </td>
      </tr>
    </table>
  );
};

export default Transform;
