import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* صورة المستخدم */}
      <div className="flex items-center justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="rounded-full w-24 h-24 border-4 border-blue-500"
        />
      </div>
      {/* معلومات المستخدم */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
        <p className="text-gray-600">Full-Stack Developer</p>
      </div>
      {/* بيانات إضافية */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Email:</span>
          <span className="text-gray-800 font-semibold">johndoe@example.com</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Phone:</span>
          <span className="text-gray-800 font-semibold">+1234567890</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Location:</span>
          <span className="text-gray-800 font-semibold">New York, USA</span>
        </div>
      </div>
      {/* أزرار الإجراءات */}
      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
