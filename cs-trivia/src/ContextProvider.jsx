import { useState } from 'react';
import Context from './Context';

// eslint-disable-next-line react/prop-types
const MyProvider = ( {children} ) => {
  const [wasCardFlipped, setWasCardFlipped] = useState(false);
  const [wasCardChanged, setWasCardChanged] = useState(false);

  return (
    <Context.Provider value={{
      wasCardFlipped, 
      setWasCardFlipped,
      wasCardChanged,
      setWasCardChanged }}>
      {children}
    </Context.Provider>
  );
};

export default MyProvider;