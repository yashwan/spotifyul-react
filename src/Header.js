import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Seach for a song..." type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="sd" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
