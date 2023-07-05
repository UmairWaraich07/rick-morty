import React, { useContext } from "react";
import { Status } from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";
import { AppContext } from "../../App";

export const Filters = () => {
  const { setPageNumber, setStatus, setGender, setSpecie } =
    useContext(AppContext);
  const clearFilter = () => {
    setPageNumber(1);
    setStatus("");
    setGender("");
    setSpecie("");

    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fs-4 fw-bold">Filters</div>
      <div
        onClick={clearFilter}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mt-2 mb-3"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Gender />
      </div>
    </div>
  );
};
