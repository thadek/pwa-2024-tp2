import { useState, useContext } from 'react';
import { SearchContext } from '../../context/context';

const roles = [
    { name: 'Todos', tag: '' },
    { name: 'Asesino', tag: 'Assassin' },
    { name: 'Luchador', tag: 'Fighter' },
    { name: 'Mago', tag: 'Mage' },
    { name: 'Tirador', tag: 'Marksman' },
    { name: 'Apoyo', tag: 'Support' },
    { name: 'Tanque', tag: 'Tank' },
  ];

const NavbarButtons= () => {
    const { setRoleValue } = useContext(SearchContext);
    const [selectedRole, setSelectedRole] = useState('Todos');

    const handleButtonClick = (role: string, tag: string) => {
        setSelectedRole(role);
        setRoleValue(tag);
    };

  return (
    <div>
      {roles.map((role) => (
        <button 
          key={role.name} 
          onClick={() => handleButtonClick(role.name, role.tag)}
          style={{
            margin: '10px',
            padding: '10px',
            backgroundColor: selectedRole === role.name ? 'darkviolet' : 'purple',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {role.name}
        </button>
      ))}
    </div>
  );
};

export default NavbarButtons;