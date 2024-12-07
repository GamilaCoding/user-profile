import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-[#3b82f6] shadow-lg w-64 p-4 text-white">
      <ul className="space-y-4">
        <li className="font-semibold">
          <a href="#dashboard" className="hover:underline">Dashboard</a>
        </li>
        <li className="font-semibold">
          <a href="#projects" className="hover:underline">Projects</a>
        </li>
        <li className="font-semibold">
          <a href="#messages" className="hover:underline">Messages</a>
        </li>
        <li className="font-semibold">
          <a href="#settings" className="hover:underline">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
