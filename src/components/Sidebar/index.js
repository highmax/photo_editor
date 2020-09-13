import React from "react";
import SidebarItem from "../SidebarItem";

export default function Sidebar({
  options,
  selectedOptionIndex,
  setSelectedOptionIndex,
}) {
  return (
    <div className="sidebar">
      {options.map((option, index) => {
        return (
          <SidebarItem
            key={index}
            name={option.name}
            active={index === selectedOptionIndex}
            handleClick={() => setSelectedOptionIndex(index)}
          />
        );
      })}
    </div>
  );
}
