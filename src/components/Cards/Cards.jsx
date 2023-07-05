import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

export const Cards = ({ page, results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, image, name, location, status } = x;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 position-relative text-decoration-none text-dark"
        >
          <div
            className={`d-flex flex-column justify-content-center mb-4 ${styles.cards}`}
          >
            <img src={image} alt={name} className={`img-fluid ${styles.img}`} />

            <div className={styles.content}>
              <div className="fs-5 fw-bold">{name}</div>

              <div className="text">
                <div className="fs-6 text-dark text-opacity-50">
                  Last Location
                </div>
                <div className="fs-6 fw-semibold">{location.name}</div>
              </div>
            </div>
            {(() => {
              if (status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} badge bg-success position-absolute`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} badge bg-danger position-absolute`}
                  >
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} badge bg-secondary position-absolute`}
                  >
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <React.Fragment>{display}</React.Fragment>;
};
