import React, { useState } from "react";
import Modal from './Modal'

function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true)
   };
   
  return (
    <>
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    
    <button onClick={openModal}> open </button>
    </>
  )
}

export default Page;
