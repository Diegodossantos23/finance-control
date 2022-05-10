import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';
import { api } from '../../services/api';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps ) => {
  const { createTransaction } = useContext(TransactionsContext);

  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ category, setCategory ] = useState('');
  const [ type, setType ] = useState('deposit'); 

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type
    })
  } 
  
  return(
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >

        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close"
        >
          <img src={closeIcon} alt="" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Register Transaction</h2>

          <input 
            type="text" 
            placeholder='Title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input 
            type="number"   
            placeholder='Amount'
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox 
              type='button' 
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeIcon} alt="Income" />
              <span>Income</span>
            </RadioBox>

            <RadioBox 
              type='button' 
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeIcon} alt="Outcome" />
              <span>Outcome</span>
            </RadioBox>
          </TransactionTypeContainer>
          
          <input 
            type="text" 
            placeholder='Category'  
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button type="submit">Register</button>
        </Container>
      </Modal>
    )
}