import React, {useContext} from 'react';
import FilterBtn from '../FilterBtn';

export const Status = () => {
  const status = ['Alive', 'Dead', 'Unknown'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {status.map ((item, index) => (
            <FilterBtn key={index} index={index} name="status" item={item} />
          ))}

        </div>
      </div>
    </div>
  );
};
