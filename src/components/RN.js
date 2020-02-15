import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

const RN = () => {
  const { state } = useContext(AppContext);
  return (
    <textarea readOnly id="output" value={JSON.stringify(state, null, 2)} />
  );
};

export default RN;
