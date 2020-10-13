import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      {/* isLargeRow is a boolean prop, check row.js */}
      <Row
        title="Reflix Originals"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="Sci-fi" fetchUrl={requests.fetchScifiMovies} />
      <Row title="Western" fetchUrl={requests.fetchWesternMovies} />
      <Row title="Animated" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="TV Series" fetchUrl={requests.fetchSeries} />
      {/* banner */}
      {/* nav bar */}
    </div>
  );
}

export default App;
