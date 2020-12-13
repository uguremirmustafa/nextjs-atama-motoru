/** @format */
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

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
    <div className="mb-3">
      <h3 className="mb-1 bg-red-200 text-center p-1 rounded text-red-900">{num}. tercihiniz:</h3>
      <AsyncSelect
        instanceId
        isSearchable
        loadOptions={loadOptions}
        placeholder="search the school you want to be assigned"
        cacheOptions
        onInputChange={handleInputChange}
      />
    </div>
  );
}
