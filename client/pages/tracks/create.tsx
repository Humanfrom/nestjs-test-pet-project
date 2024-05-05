import { Box, Button, Card, Grid } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";

const Create = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Загрузка треков</h1>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Create;
