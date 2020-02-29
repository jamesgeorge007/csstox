import React from 'react';

import './title.scss';
import { useStore } from "effector-react";
import { store } from '../../store';

const Title = () => {
    const { outputType } = useStore(store);
  return (
    <table>
        <tbody>
      <tr>
        <th style={{width: '45%'}}>CSS</th>
        <th style={{width: '10%', fontSize: '22px'}}>&#8594;</th>
        <th style={{width: '45%'}}>{ outputType }</th>
      </tr>
        </tbody>
    </table>
  );
};

export default Title;
