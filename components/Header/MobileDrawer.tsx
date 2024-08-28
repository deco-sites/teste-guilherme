interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-white shadow-lg`}
    >
      <div className="p-4">
        <button onClick={onClose} className="mb-8">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav className="space-y-4">
          <a href="#home" className="block text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="#about" className="block text-gray-800 hover:text-gray-600">
            About
          </a>
          <a
            href="#services"
            className="block text-gray-800 hover:text-gray-600"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-800 hover:text-gray-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileDrawer;
