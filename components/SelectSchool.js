/** @format */

import React, { useContext, useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { AppContext } from '../contexts/SchoolsContext';

export default function CustomSelect({ schools, num }) {
  const options = [];
  schools.map((school) => {
    options.push({ label: `${school.fields.name}`, value: `${school.fields.name}` });
  });

  const filterSchools = (inputValue) => {
    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterSchools(inputValue));
    }, 1000);
  };
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue(inputValue);
    return inputValue;
  };
  return (
    <>
      <AsyncSelect
        instanceId
        isSearchable
        loadOptions={loadOptions}
        placeholder="search the school you want to be assigned"
        cacheOptions
        onInputChange={handleInputChange}
      />
    </>
  );
}
