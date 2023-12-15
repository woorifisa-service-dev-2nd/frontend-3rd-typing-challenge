import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div
        data-cy="modal-backdrop"
        className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-1"
        onClick={onClose}
      ></div>
      <div className="fixed z-10 w-3/4 h-3/4 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-slate-100">
        {children}
      </div>
    </>
  );
};

export default Modal;
