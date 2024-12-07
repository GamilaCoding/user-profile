import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#profile" className="hover:underline">Profile</a></li>
            <li><a href="#settings" className="hover:underline">Settings</a></li>
            <li><a href="#logout" className="hover:underline">Logout</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
