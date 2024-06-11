import React from "react";
import CharactersPage from "./Characters";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>
      <CharactersPage />
    </>
  );
};

export default Home;
