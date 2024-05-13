import React, { useState } from "react";
import { MainContainer, ContentContainer, PageContent, CardsBackground  } from "./style";
import Sidebar from "../../components/sidebar/Sidebar";
import WelcomeMessage from "../../components/welcomeMessage";
import BackgroundCards from "../../components/backgroundCard";
import NavBarComponent from "../../components/Navbar";

function DashboardPage() {

  return (
    <MainContainer>
    <Sidebar></Sidebar>
    <ContentContainer>
      <NavBarComponent></NavBarComponent>
      <PageContent>
      <WelcomeMessage/>
       <BackgroundCards></BackgroundCards>
      </PageContent>
    </ContentContainer>
  </MainContainer>
  );
}

export default DashboardPage;

