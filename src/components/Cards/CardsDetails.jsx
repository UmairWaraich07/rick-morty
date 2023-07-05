import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const { gender, image, location, origin, name, species, status } =
    fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center my-4">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt={name} className="image-fluid" />
        {(() => {
          if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span> {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location : </span> {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin : </span> {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species : </span> {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
