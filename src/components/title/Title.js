import React, { useContext } from 'react';

import './title.scss';
import {Context} from "../../App";

const Title = () => {
    const { outputType } = useContext(Context);
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
