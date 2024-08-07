import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
      <p className="mb-4 text-white font-medium">&copy; 2024 Tech Learn. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gray-400 cursor-pointer">Terms of Service</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
