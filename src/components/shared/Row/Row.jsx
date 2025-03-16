import React from "react";
import Card from "../Card/Card";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, results = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-card">
        {results.map((item, index) => (
          <Card src={`${imgUrl}/${item.poster_path}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Row;
