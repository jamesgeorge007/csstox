import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

const RN = () => {
  const { value } = useContext(AppContext);
  return (
    <textarea readOnly id="output" value={JSON.stringify(value, null, 2)} />
  );
};

export default RN;
