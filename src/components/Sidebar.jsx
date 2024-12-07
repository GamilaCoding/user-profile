import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-lg w-64 p-4">
      <ul className="space-y-4">
        <li className="font-semibold text-gray-700">
          <a href="#dashboard" className="hover:text-blue-500">Dashboard</a>
        </li>
        <li className="font-semibold text-gray-700">
          <a href="#projects" className="hover:text-blue-500">Projects</a>
        </li>
        <li className="font-semibold text-gray-700">
          <a href="#messages" className="hover:text-blue-500">Messages</a>
        </li>
        <li className="font-semibold text-gray-700">
          <a href="#settings" className="hover:text-blue-500">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
