import React, { useContext } from 'react';
import { SearchContext } from '../../context/context';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="">
      <MagnifyingGlassIcon className='w-5 h-7 text-gray-600 fixed ml-6 mt-3' />
      <input 
      className='block p-2 ms-4 mt-2 ps-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-violet-100 focus:ring-violet-600 focus:border-transparent w-96'
      type="text" 
      value={searchValue} 
      onChange={handleSearch} 
      placeholder="Buscar campeón..."
      />
    </div>
  );
};

export default SearchBar;