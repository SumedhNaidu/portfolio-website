// _app.js
import React, { useState } from 'react';

export const MyContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [sharedState, setSharedState] = useState('Hello from context!');

  return (
    <MyContext.Provider value={sharedState}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
