import React from "react";
import { Container } from "react-bootstrap";
import EntryBtns from "../../components/AddEntryBtns/EntryBtns";
import AllEntries from "../../components/Entry/AllEntries";
import Layout from "../../components/Layout/Layout";
import Summary from "../../components/Summary/Summary";

function Home() {
  return (
    <>
      <Layout />
      <Container
        style={{
          padding: "0",
          margin: "0 auto",
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Summary />
        <EntryBtns />
        <AllEntries />
      </Container>
    </>
  );
}

export default Home;
