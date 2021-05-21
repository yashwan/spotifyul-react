import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info" style={{ objectFit: "fixed" }}>
        <img src={discover_weekly?.images[0]?.url} alt="hg" />
        <div className="body_infotext">
          <strong> PLAYLISTS</strong>
          <h2> weekly discovery</h2>
          <p>{discover_weekly?.description}</p>
          <div
            className="song_row"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            {discover_weekly?.tracks.items.map((d) => (
              <h3 style={{ alignItems: "center" }}>
                <img
                  style={{ height: 100, width: 100 }}
                  src={d.track.album.images[0].url}
                  alt="(("
                />
                {d.track.name}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
