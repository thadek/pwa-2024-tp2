import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white bg-neutral-950 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Lolchamp. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;