import { Box, Button, Card, Grid } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Трек 1",
      artist: "Исполнитель 1",
      text: "Какой-то текст",
      listens: 5,
      audio: "http://localhost:7000/audio/001.mp3",
      picture: "http://localhost:7000/image/001.jpg",
      comments: [],
    },
    {
      _id: "2",
      name: "Трек 2",
      artist: "Исполнитель 2",
      text: "Какой-то текст",
      listens: 9,
      audio: "http://localhost:7000/audio/001.mp3",
      picture: "http://localhost:7000/image/002.jpg",
      comments: [],
    },
    {
      _id: "3",
      name: "Трек 3",
      artist: "Исполнитель 3",
      text: "Какой-то текст",
      listens: 7,
      audio: "http://localhost:7000/audio/001.mp3",
      picture: "http://localhost:7000/image/001.jpg",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
