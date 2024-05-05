import React, { useState, ReactNode } from 'react';
import { SearchContext } from './context/context';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [roleValue, setRoleValue] = useState<string>('');

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, roleValue, setRoleValue }}>
            {children}
        </SearchContext.Provider>
    );
};

export default Layout;