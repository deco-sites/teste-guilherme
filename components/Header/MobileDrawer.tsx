import { IMobileDrawerProps } from "site/@types/Header/index.tsx";

const MobileDrawer = ({ isOpen, onClose }: IMobileDrawerProps) => {
  return (
    <div
      className={`fixed inset-0 top-0 h-max z-50 bg-zinc-300 shadow-lg transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col p-4 h-full">
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
          <a
            href="#home"
            className="block text-gray-800 hover:text-gray-600"
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-800 hover:text-gray-600"
            onClick={onClose}
          >
            About
          </a>
          <a
            href="#services"
            className="block text-gray-800 hover:text-gray-600"
            onClick={onClose}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-800 hover:text-gray-600"
            onClick={onClose}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileDrawer;
