/** @format */

import React from 'react';

export default function Teacher({ teacher }) {
  const { name } = teacher.fields;
  return (
    <div className="text-red-400 font-bold my-4 text-lg flex justify-between shadow-lg p-3 border hover:shadow-md rounded">
      <p>{name}</p>
    </div>
  );
}
