import React, { useState } from "react";
import "./Tabs.css";

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(props.selected);
  const handleClick = (tab) => {
    setSelectedTab(tab);
  };
  const _renderTitles = () => {
    return props.children.map((child, index) => (
      <li
        onClick={() => handleClick(index)}
        className={index === selectedTab && "active"}
        key={"tab" + index}
      >
        {child.props.label}
      </li>
    ));
  };

  return (
    <div className="tabs">
      <ul>{_renderTitles()}</ul>
      <div className="tab-content">{props.children[selectedTab]}</div>
    </div>
  );
};
export default Tabs;
