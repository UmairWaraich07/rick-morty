import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = () => {
  const genders = ['Male', 'Female', 'Genderless', 'Unknown'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {genders.map ((item, index) => (
            <FilterBtn key={index} index={index} name="gender" item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
