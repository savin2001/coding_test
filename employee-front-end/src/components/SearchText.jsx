import React, { useState } from 'react';

function SearchTextfield() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="relative rounded-md shadow-sm">
      <input
        className="form-input py-2 pl-10 pr-4 leading-5 rounded-md transition duration-150 ease-in-out"
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
    </form>
  );
}

export default SearchTextfield;