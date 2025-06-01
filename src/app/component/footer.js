import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3587CA] text-white py-6 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-white-300">Dream Consultancy</h3>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-white-400" />
              <span>Online Japanese IELTS Practice Portal</span>
            </p>
            <p className="flex items-center space-x-2 mt-1">
              <FaPhoneAlt className="text-white-400" />
              <span>+977-9749496529</span>
            </p>
            <p className="flex items-center space-x-2 mt-1">
              <FaEnvelope className="text-white-400" />
              <span>support@dream.com</span>
            </p>
          </div>

          {/* Center: Quote or Message */}
          <div>
            <h4 className="text-sm italic text-white-200">
              “Success starts with preparation – and we are with you every step of the way.”
            </h4>
          </div>

          {/* Right: Copyright */}
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Dream Consultancy. All rights reserved.</p>
            <p className="text-xs text-white-300">Maintaining excellence in Japanese language learning.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
