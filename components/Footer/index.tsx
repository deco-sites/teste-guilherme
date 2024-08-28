const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Teste Guilherme</h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Servicos
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
