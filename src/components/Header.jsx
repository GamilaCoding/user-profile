import React, { useState } from "react";
import usePageTitle from "../../store/PageTitle.js";
import Video from "../../assets/icons/video.svg";
import Survey from "../../assets/icons/survay.svg";
import Show from "../../assets/icons/show.svg";
import Profile from "../../assets/icons/profile.svg";
import Support from "../../assets/icons/support.svg";
import ClickAwayListener from "react-click-away-listener";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const pageTitle = usePageTitle((state) => state.pageTitle);
  const [popup, setPopup] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="bg-[#3b82f6] text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* عنوان الصفحة */}
        <div className="font-bold text-lg">{pageTitle}</div>

        {/* قائمة الموبايل (Hamburger Menu) */}
        <div className="lg:hidden">
          <button onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            {hamburgerOpen ? (
              <AiOutlineClose size={24} className="text-white" />
            ) : (
              <AiOutlineMenu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* القائمة الكاملة */}
        <div className={`lg:flex hidden gap-8 items-center`}>
          <Link to="https://www.motkaml.com/home/contact-us/">
            <div className="flex items-center gap-2">
              <img src={Support} alt="Support" className="w-6" />
              <span>الدعم الفني</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <img src={Video} alt="Video" className="w-6" />
            <span>شرح المنصة</span>
          </div>

          <a href={localStorage.getItem("path")} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2">
              <img src={Show} alt="Store" className="w-6" />
              <span>عرض المتجر</span>
            </div>
          </a>

          <div
            className="relative cursor-pointer"
            onClick={() => setPopup(true)}
          >
            <img src={Profile} alt="Profile" className="rounded-full w-8" />
            {popup && (
              <ClickAwayListener onClickAway={() => setPopup(false)}>
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md p-3">
                  <p
                    className="text-sm font-bold cursor-pointer"
                    onClick={() => {
                      localStorage.clear();
                      sessionStorage.clear();
                      window.location.href =
                        "https://www.motkaml.com/home/?nocache=true";
                    }}
                  >
                    تسجيل الخروج
                  </p>
                </div>
              </ClickAwayListener>
            )}
          </div>
        </div>
      </nav>

      {/* قائمة الموبايل */}
      {hamburgerOpen && (
        <div className="bg-blue-700 bg-opacity-90 fixed inset-0 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-11/12 max-w-sm mx-auto">
            <div className="flex flex-col gap-4 text-black">
              <Link to="https://www.motkaml.com/home/contact-us/">
                <div className="flex items-center gap-2">
                  <img src={Support} alt="Support" className="w-6" />
                  <span>الدعم الفني</span>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <img src={Video} alt="Video" className="w-6" />
                <span>شرح المنصة</span>
              </div>

              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  window.location.href = localStorage.getItem("path");
                }}
              >
                <img src={Show} alt="Store" className="w-6" />
                <span>عرض المتجر</span>
              </div>

              <p
                className="text-sm font-bold cursor-pointer"
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  window.location.href =
                    "https://www.motkaml.com/home/?nocache=true";
                }}
              >
                تسجيل الخروج
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
