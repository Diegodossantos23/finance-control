import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export const Summary: React.FC = () => {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        console.warn()

        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrwas += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdrwas: 0,
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Inputs</p>
                    <img src={incomeImg} alt="Inputs"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Inputs</p>
                    <img src={outcomeImg} alt="Outputs"/>
                </header>
                <strong>
                    -
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdrwas)}
                </strong>
            </div>

            <div className='hg-background'>
                <header>
                    <p>Inputs</p>
                    <img src={totalImg} alt="Totals"/>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}