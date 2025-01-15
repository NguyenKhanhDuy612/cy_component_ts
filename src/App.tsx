import { useState } from 'react'
import './App.css'
import FormComponentTwo from './components/form/formTwo'
import GetApi from './components/GetApi/GetApi'
import Pagination from './components/Pagination/Pagination'
import Modal from './components/modal/Modal'

function App() {

  /* Pagination */
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 5;

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  // return (
  //   <div>
  //     <h1>Current Page: {currentPage}</h1>
  //     <Pagination totalPages={totalPages} currentPage={currentPage} onChange={handlePageChange} />
  //   </div>
  // );

  /* Modal */

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App
