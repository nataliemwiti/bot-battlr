import React from "react";

function SortBar({ onSortChange }) {
  return (
    <div className="sort-bar" style={{ marginBottom: "1rem" }}>
      <button onClick={() => onSortChange("health")}>Sort by Health</button>
      <button onClick={() => onSortChange("damage")}>Sort by Damage</button>
      <button onClick={() => onSortChange("armor")}>Sort by Armor</button>
      <button onClick={() => onSortChange("")}>Default</button>
    </div>
  );
}

export default SortBar;