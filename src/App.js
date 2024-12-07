import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <UserProfile />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
