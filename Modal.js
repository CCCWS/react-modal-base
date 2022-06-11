import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ setModalOpen, modalOpen }) {
  useEffect(() => {
    if (modalOpen) {
      document.querySelector("body").classList.toggle("not-scroll");
    }
  }, [modalOpen]);

  const modalClose = (event) => {
    if (event.target.className === "modal modal_open") {
      setModalOpen(false);
      document.querySelector("body").classList.toggle("not-scroll");
    }
  };

  const modalCloseBtn = () => {
    setModalOpen(false);
    document.querySelector("body").classList.toggle("not-scroll");
  };

  return (
    <div
      className={[`modal ${modalOpen ? "modal_open" : null}`].join(" ")}
      onClick={modalClose}
    >
      {modalOpen && (
        <>
          <button onClick={modalCloseBtn} className="modalCloseBtn">
            X
          </button>
          <div className="item">
            <div>content</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
