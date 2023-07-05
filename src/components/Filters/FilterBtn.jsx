import React, {useContext} from 'react';
import {AppContext} from '../../App';

const FilterBtn = ({index, name, item}) => {
  const {setPageNumber, setStatus, setGender, setSpecie} = useContext (
    AppContext
  );
  return (
    <div>
      <style jsx>
        {`
            .x:checked + label {
                background-color : #0b5ed7;
                color : white;
            }
            input[type='radio']{
                display : none;
            }`}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber (1);
            if (name === 'status') {
              setStatus (item);
            }
            if (name === 'gender') {
              setGender (item);
            }
            if (name === 'species') {
              setSpecie (item);
            }
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
