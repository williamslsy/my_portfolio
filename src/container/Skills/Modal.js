
import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import { images } from '../../constants';

export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  // render the modal JSX in the portal div.

  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <img src={images.resume} alt="profile_bg" />
        <button type="button" onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,

    document.getElementById('portal'),
  );
};
