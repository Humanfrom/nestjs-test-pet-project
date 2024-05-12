import { Box, Button, Card, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import StepWrapper from "../../components/StepWrapper";
import FileUpload from "../../components/FileUpload";

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const next = () => {
    if (activeStep < 2) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={"Название трека"} />
            <TextField style={{ marginTop: 10 }} label={"Имя исполнителя"} />
            <TextField
              style={{ marginTop: 10 }}
              label={"Слова к треку"}
              multiline
              rows={4}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setImage} accept="image/*">
            <Button>Загрузите обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузите аудио</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
