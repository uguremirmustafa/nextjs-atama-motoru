/** @format */

import React, { useState, useContext } from 'react';
import { SchoolContext } from '../contexts/SchoolContext';
import SelectSchool from './SelectSchool';
export default function TodoForm() {
  const [tercih, setTercih] = useState('');
  const { schools, submitTercih } = useContext(SchoolContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    submitTercih(tercih);
    setTodo('');
  };
  return (
    <form className="form my-6" onSubmit={handleSubmit}>
      <div className="flex flex-col text-sm mb-2">
        {/* <label htmlFor="todo" className="font-bold mb-2 text-gray-800">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="type some todo"
          className="border border-gray-200 p-2 rounded appearance-none focus:outline-none focus:border-gray-500"
        /> */}
        <SelectSchool tercih={tercih} setTercih={setTercih} />
      </div>
      <button type="submit" className="w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
        tercihleri ilet
      </button>
    </form>
  );
}
