import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards/Cards";
import InputGroups from "../components/Filters/Category/InputGroups";

const Locations = () => {
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, type, dimension } = info;

  const [location, setLocation] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${location}`;
  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
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
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h2>

        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>

        <h6 className="text-center">Type : {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <div className="text-center fs-4 mb-3 fw-semibold">Pick Episodes</div>
          <InputGroups name="Location" total={126} setEpisode={setLocation} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row mb-4">
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
