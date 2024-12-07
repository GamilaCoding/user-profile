import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '',
    subscription: 'Premium', // الباقة الافتراضية
    profilePicture: 'https://via.placeholder.com/150', // صورة افتراضية
    isEditing: false,
    isChangingPassword: false, // خاصية لتمكين تغيير كلمة السر
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    setUser({ ...user, isEditing: false });
  };

  const handleCancel = () => {
    setUser({ ...user, isEditing: false });
  };

  const handleChangePassword = () => {
    setUser({ ...user, isChangingPassword: true });
  };

  const handleSavePassword = () => {
    setUser({ ...user, isChangingPassword: false, password: '' });
  };

  // تغيير الصورة الشخصية
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // الحصول على أول ملف مختار
    if (file) {
      const reader = new FileReader(); // قراءة الملف
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result }); // تعيين الصورة الجديدة
      };
      reader.readAsDataURL(file); // تحويل الصورة إلى صيغة Base64
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      {/* صورة المستخدم */}
      <div className="flex items-center justify-center">
        <img
          src={user.profilePicture}
          alt="User Avatar"
          className="rounded-full w-24 h-24 border-4 border-blue-500"
        />
      </div>

      {/* حقل تغيير الصورة عند التحرير */}
      {user.isEditing && (
        <div className="text-center mt-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="bg-gray-100 text-gray-600 p-2 rounded-md"
          />
        </div>
      )}

      {/* معلومات المستخدم */}
      <div className="text-center">
        {user.isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 p-2"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-2 text-gray-600 border-b-2 border-blue-500 p-2"
            />
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </>
        )}
      </div>

      {/* قسم الباقة تحت الاسم */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-700">Subscription Package</h2>
        <p className="text-gray-600">{user.subscription} Package</p>
      </div>

      {/* قسم تغيير كلمة السر */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700">Change Password</h2>
        {!user.isChangingPassword ? (
          <button
            onClick={handleChangePassword}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Change Password
          </button>
        ) : (
          <form className="space-y-4 mt-4">
            <div>
              <label htmlFor="password" className="block text-gray-600">New Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSavePassword}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save New Password
              </button>
              <button
                onClick={() => setUser({ ...user, isChangingPassword: false })}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* خيارات التعديل أو الحفظ */}
      <div className="flex justify-between">
        {user.isEditing ? (
          <>
            <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Save Changes
            </button>
            <button onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setUser({ ...user, isEditing: true })} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
