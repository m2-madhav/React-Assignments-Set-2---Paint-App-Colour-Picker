import React from "react";

export default function Selection(props) {
  const { applyColor } = props;
  const [colourChange, setcolourChange] = React.useState({ background: "" });
  return (
    <div
      className="fix-box"
      style={colourChange}
      onClick={() => applyColor(setcolourChange)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
