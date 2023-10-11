import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 p-4">
      <div className="dark:bg-slate-800 bg-gray-100 font-sans">
        <div className="dark:bg-slate-800 dark:shadow-white bg-white shadow">
          <div className="dark:bg-slate-800 container mx-auto px-4">
            <div className="dark:bg-slate-800 flex items-center justify-between py-4">
              <div>
                <p><a href="#" className="dark:text-white">Footer Content</a></p>
              </div>

              <div className="hidden dark:bg-slate-800 sm:flex sm:items-center">
                <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Link 1</a>
                <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Link 2</a>
                <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Link 3</a>
                <a href="#" className="dark:text-white text-gray-800 text-sm font-semibold hover:text-purple-600">Link 4</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;