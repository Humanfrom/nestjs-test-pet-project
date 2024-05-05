import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const MainLayout: React.FC<{ children: React.ReactNode }>  = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '90px auto'}}>
        { children }
      </Container>
    </>
  );
};

export default MainLayout;
