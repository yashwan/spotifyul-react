import React from "react";

function SidebarOption({ title, icon }) {
  return (
    <div className="sidebar_option">
      <h4> {icon}</h4>
      {icon ? <h4 style={{ padding: "5px" }}>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
export default SidebarOption;
