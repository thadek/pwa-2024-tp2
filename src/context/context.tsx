import React from 'react';

export const SearchContext = React.createContext({
  searchValue: '',
  setSearchValue: (value: any) => {
    console.log(value);
  },
  roleValue: '',
  setRoleValue: (value: any) => {
    console.log(value);
  },
});