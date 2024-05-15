import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps>  = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || "Music everywhere"}</title>
        <meta name="description" content={`Music everywhere - это место, где каждый может проявить себя как музыкант или исполнитель. ${description || ""}`}/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={keywords || "Музыка, треки, песни"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Navbar />
      <Container style={{margin: '90px auto'}}>
        { children }
      </Container>
      <Player/>
    </>
  );
};

export default MainLayout;
