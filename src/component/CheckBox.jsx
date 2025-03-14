import React, { useState } from "react";

function CheckBox({ text}) {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="checkbox-item">
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(true)} readOnly />
      <span>{text}</span>
    </div>
  );
}

export default CheckBox;
