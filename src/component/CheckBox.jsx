import React from "react";

function CheckBox({ text, checked  }) {
  return (
    <div className="checkbox-item">
      <input type="checkbox" checked={checked} readOnly />
      <span>{text}</span>
    </div>
  );
}

export default CheckBox;
