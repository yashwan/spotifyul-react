import React from "react";
import "./Footer.css";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_leftlogo"
          src="https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg"
          alt=""
          height="100"
          width="100"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-12px"
          }}
        >
          <h4 style={{ marginBottom: "-19px" }}>Album</h4>
          <p style={{ fontSize: 14 }}>deeded</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleFilledOutlinedIcon
          fontSize="large"
          className="footer_icon"
        />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
