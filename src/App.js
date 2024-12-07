import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* رأس الصفحة */}
      <Header />
      <div className="flex flex-1">
        {/* المحتوى الرئيسي */}
        <main className="flex-1 p-4">
          <UserProfile />
        </main>
        {/* القائمة الجانبية */}
        <Sidebar />
      </div>
      {/* الفوتر */}
      <Footer />
    </div>
  );
}

export default App;
