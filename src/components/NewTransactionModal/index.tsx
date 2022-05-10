import Modal from 'react-modal';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps ) => {
  const [ type, setType ] = useState('deposit');  
  
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

        <Container>
          <h2>Register Transaction</h2>

          <input type="text" placeholder='Title'/>
          <input type="number" placeholder='Value'/>

          <TransactionTypeContainer>
            <RadioBox 
              type='button' 
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
            >
              <img src={incomeIcon} alt="Income" />
              <span>Income</span>
            </RadioBox>

            <RadioBox 
              type='button' 
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
            >
              <img src={outcomeIcon} alt="Outcome" />
              <span>Outcome</span>
            </RadioBox>
          </TransactionTypeContainer>
          
          <input type="text" placeholder='Category'/>

          <button type="submit">Register</button>
        </Container>
      </Modal>
    )
}