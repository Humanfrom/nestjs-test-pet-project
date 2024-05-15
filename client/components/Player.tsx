import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

let audio: HTMLAudioElement;

const Player = () => {
  const { pause, volume, active, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );
  const {
    pauseTrack,
    playTrack,
    setVoulme,
    setCurentTime,
    setDuration,
    setActiveTrack,
  } = useActions();

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:7000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.round(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurentTime(Math.round(audio.currentTime));
      };
    }
  };

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVolume = Number(event.target.value);
    audio.volume = currentVolume / 100;
    setVoulme(currentVolume);
  };

  const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTime = Number(event.target.value);
    audio.currentTime = currentTime;
    setCurentTime(currentTime);
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction={"column"}
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress
        left={volume}
        right={100}
        onChange={changeVolume}
        type="volume"
      />
    </div>
  );
};

export default Player;
