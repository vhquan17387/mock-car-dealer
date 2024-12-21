import React, { useState } from 'react';

import LightboxContext from './lightbox-context';


export default function LightboxProvider({children}) {
    const [state, setState] = useState(false);

    const lightboxContext = {
        isLbShowing: state,
        onChange: bool => setState(bool)
    }

  return (
    <LightboxContext.Provider value={lightboxContext}>
      {children}
    </LightboxContext.Provider>
  )
}
