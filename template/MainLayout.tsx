import React, { ReactElement, ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Container from "../Layout/Container";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default MainLayout;
