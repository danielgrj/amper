import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function Provider(props) {
  const [type, setType] = useState('PML');
  const [region, setRegion] = useState('');
  const [date, setDate] = useState(undefined);

  return (
    // prettier-ignore
    <Context.Provider value={{type, setType, region, setRegion, date, setDate}}>
      {props.children}
    </Context.Provider>
  );
}
