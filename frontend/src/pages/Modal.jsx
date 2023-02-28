import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
        <div className="flex justify-between px-6 py-2.5 rounded-t-lg items-center bg-blue-200">
          <h3 className="font-semibold text-sm">Add Client Form</h3>
          <button
            className="text-gray-100 h-7 w-7 hover:text-gray-50 font-bold rounded-full bg-orange-500 bg-opacity-70 hover:bg-opacity-100 "
            onClick={onClose}
          >
            X
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
