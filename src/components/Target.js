import React, { useContext } from 'react';

import '../assets/css/textarea.css';
import { AppContext } from '../context/AppContext';

const Target = () => {
  const { state } = useContext(AppContext);
  return (
    <textarea readOnly id="output" value={JSON.stringify(state, null, 2)} />
  );
};

export default Target;
