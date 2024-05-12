import { Margin } from "@mui/icons-material";
import { Container, StepLabel, Stepper, Step, Grid, Card } from "@mui/material";
import React from "react";

interface StepWrapperProps {
  activeStep: number;
  children?: React.ReactNode;
}

const steps = ["Информация о треке", "Загрузите обложку", "Загрузите трек"];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, i) => (
          <Step key={step + i} completed={activeStep > i}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: "70px 0", height: 270 }}
      >
        <Card
            style={{width: 600}}
        >{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
