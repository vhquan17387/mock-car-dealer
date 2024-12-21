import React, { useContext } from "react";

const LightboxContext = React.createContext({
  isLbShowing: Boolean,
  onChange: Function
});

export default LightboxContext;