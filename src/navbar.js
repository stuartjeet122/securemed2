import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const logoUrl = "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500";

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/Filepath/Doctor/doctor', text: 'Doctors' },
  { to: '/Filepath/Nurse/Appointment', text: 'Nurses' },
  { to: '/Filepath/Pharmacy/pharmacy', text: 'Pharmacists' },
  { to: '/Filepath/Patient/patient', text: 'Patients' },
  { to: '/Filepath/Admin/admin', text: 'Admin' },
];

function NAVBAR() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            <Link to="/"><img className="h-8 w-auto" src={logoUrl} alt="Your Company" /></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${location.pathname === link.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                    aria-current={location.pathname === link.to ? 'page' : undefined}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.to}
              className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === link.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NAVBAR;