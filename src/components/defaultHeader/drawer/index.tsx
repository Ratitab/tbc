import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: any;
  routes: { id: number; label: string }[];
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, routes }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#f0ffff] bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-y-0 right-0 max-w-full w-64 bg-white p-8 overflow-y-auto bg-black">
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none text-[#f4f4f4]"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <ul>
          {routes.map((route) => (
            <li key={route.id} className="text-[#f4f4f4] text-[24px] font-semibold leading-[60px]">{route.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
