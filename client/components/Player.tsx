import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const active = false;
  const track: ITrack = {
    _id: "1",
    name: "Трек 1",
    artist: "Исполнитель 1",
    text: "Какой-то текст",
    listens: 5,
    audio: "http://localhost:7000/audio/001.mp3",
    picture: "http://localhost:7000/image/001.jpg",
    comments: [],
  };

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction={"column"}
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => {}} type="volume" />
    </div>
  );
};

export default Player;
