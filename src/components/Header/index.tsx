import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps ) => {

    return(
        <Container>
            <Content>
                <img src={logo} alt="finance control"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New transaction
                </button>
            </Content>
        </Container>
    )
}