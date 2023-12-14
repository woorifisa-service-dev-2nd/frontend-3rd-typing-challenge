import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-1'
        onClick={onClose}>

      </div>
      <div>
        {children}
      </div>

    </>
  )
};

export default Modal;
