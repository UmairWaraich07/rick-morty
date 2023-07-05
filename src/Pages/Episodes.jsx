import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards/Cards";
import InputGroups from "../components/Filters/Category/InputGroups";

const Episodes = () => {
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { air_date, name } = info;

  const [episode, setEpisode] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${episode}`;
  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h2 className="text-center my-4">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h2>
        <h5 className="text-center">
          Air Date : {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <div className="text-center fs-4 mb-3 fw-semibold">Pick Episodes</div>
          <InputGroups name="Episode" total={51} setEpisode={setEpisode} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row mb-4">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
