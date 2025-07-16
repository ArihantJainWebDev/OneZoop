// src/components/LordIcon.jsx
import React from "react";

const LordIcon = ({ src, trigger = "hover", state = "", size = 100 }) => {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      state={state}
      style={{ width: `${size}px`, height: `${size}px` }}
    ></lord-icon>
  );
};

export default LordIcon;