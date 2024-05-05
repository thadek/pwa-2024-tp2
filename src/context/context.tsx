import React from 'react';

export const SearchContext = React.createContext({
  searchValue: '',
  setSearchValue: (value: string) => {},
  roleValue: '',
  setRoleValue: (value: string) => {},
});