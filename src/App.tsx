import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import { TransactionsContext } from './TransactionsContext';

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransaction}
      />
      <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}

export default App;
