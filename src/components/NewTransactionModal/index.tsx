import Modal from 'react-modal';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps ) => {
  const [ title, setTitle ] = useState('');
  const [ value, setValue ] = useState(0);
  const [ category, setCategory ] = useState('');
  const [ type, setType ] = useState('deposit'); 

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    console.warn('form data', {
      title,
      value,
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
            placeholder='Value'
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
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