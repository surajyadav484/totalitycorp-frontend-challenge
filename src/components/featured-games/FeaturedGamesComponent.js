import React from "react";
import { featuredGames } from "./featuredGames";

const FeaturedGamesComponent = () => {
  const featuredGamesList = featuredGames?.map((featuredGame) => (
    <div className="featuredGamesCard" key={featuredGame.id}>
      <img src={featuredGame?.bgImageURL} alt={featuredGame?.name} />
      <div className="fc-titleImage">
        <img src={featuredGame?.titleImageURL} alt={featuredGame?.name} />
        <h3>Official Site</h3>
      </div>
    </div>
  ));

  return (
    <div className="featured-games-container">
      <h1> Fatured Games</h1>
      <div className="featured-games-content">{featuredGamesList}</div>
      <div className="latest-games">
        <a className="ea-btn">Latest Games</a>
      </div>
    </div>
  );
};

export default FeaturedGamesComponent;
