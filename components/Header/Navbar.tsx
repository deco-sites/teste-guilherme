const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      <a href="#inicio" className="text-gray-800 hover:text-gray-600">
        Inicio
      </a>
      <a href="#sobre" className="text-gray-800 hover:text-gray-600">
        Sobre
      </a>
      <a href="#servicos" className="text-gray-800 hover:text-gray-600">
        Servicos
      </a>
      <a href="#contato" className="text-gray-800 hover:text-gray-600">
        Contato
      </a>
    </nav>
  );
};

export default Navbar;
