import { useState, useContext } from 'react';
import { SearchContext } from '../../context/context';
import { roles } from '../../const/roles';



const NavbarButtons= () => {
    const { setRoleValue } = useContext(SearchContext);
    const [selectedRole, setSelectedRole] = useState('Todos');

    const handleButtonClick = (role: string, tag: string) => {
        setSelectedRole(role);
        setRoleValue(tag);
    };

  return (
    <div className="hidden lg:block">
      {roles.map((role) => (
        <button 
          key={role.name} 
          onClick={() => handleButtonClick(role.name, role.tag)}

          className={`m-2 p-2 lolfont uppercase text-sm bg-purple-950 text-white rounded-lg hover:bg-purple-900 transition duration-150 ${selectedRole === role.name ? 'bg-violet-800' : ''}`}
         
        >
          {role.name}
        </button>
      ))}
    </div>
  );
};

export default NavbarButtons;