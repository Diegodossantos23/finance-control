import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const App: React.FC = () => {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  const handleOpenNewTransaction = () => {
      setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransaction = () => {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <React.Fragment>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>
      <Dashboard/>
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransaction}
      >
        <h2>Register Transaction</h2>
      </Modal>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;
