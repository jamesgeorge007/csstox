import React, { useContext } from 'react';

import '../assets/css/table_layout.css';
import { AppContext } from '../context/AppContext';

const Title = () => {
  const { type } = useContext(AppContext);
  return (
    <table>
      <tr>
        <th style={{width: '45%'}}>CSS</th>
        <th style={{width: '10%', fontSize: '22px'}}>&#8594;</th>
        <th style={{width: '45%'}}>{type}</th>
      </tr>
    </table>
  );
};

export default Title;
