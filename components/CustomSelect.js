/** @format */

import React from 'react';

import Select from 'react-select';

export default function CustomSelect({ schools }) {
  const options = [{ label: 'anan', value: 'anan' }];
  return (
    <>
      <h2 className="my-3 text-center">Okulunu Sec</h2>
      <Select options={options} placeholder="okulunu sec" />
    </>
  );
}
