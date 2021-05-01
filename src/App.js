import React from "react";
import Row from "./components/Row";
import requests from "./requests";
function App() {
  return (
    <div>
      <h2>Devlopment Begins</h2>
      <Row name="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row name="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row name="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row name="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row name="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row name="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row name="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row name="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
