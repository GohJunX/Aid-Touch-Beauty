import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function NavBar() {
  return (
    <nav className="bg-white dark:bg-slate-800 p-4">
    <div className="dark:bg-slate-800 bg-gray-100 font-sans">
	<div className="dark:bg-slate-800 dark:shadow-white bg-white shadow">
    <div className="dark:bg-slate-800 container mx-auto px-4">
      <div className="dark:bg-slate-800 flex items-center justify-between py-4">
        <div>
          <p><a href="#" className="dark:text-white">Aid Touch</a></p>
        </div>

        <div className="hidden dark:bg-slate-800 sm:flex sm:items-center">
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Products</a>
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Services</a>
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Co-Products</a>
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600">About</a>
        </div>

        <div className="dark:bg-slate-800">
          <ThemeSwitcher />
        </div>
       

       
      </div>
      
      <div className="block sm:hidden dark:bg-slate-800 border-t-2 py-2">
        <div className="flex flex-col">
        <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Products</a>
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Services</a>
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Co-Products</a>
          <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600">About</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </nav>
  );
}

export default NavBar;