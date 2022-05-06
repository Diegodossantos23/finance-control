import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export const Summary: React.FC = () => {
    return(
        <Container>
            <div>
                <header>
                    <p>Inputs</p>
                    <img src={incomeImg} alt="Inputs"/>
                </header>
                <strong>R$ 3.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Inputs</p>
                    <img src={outcomeImg} alt="Outputs"/>
                </header>
                <strong>- R$ 2.000,00</strong>
            </div>

            <div className='hg-background'>
                <header>
                    <p>Inputs</p>
                    <img src={totalImg} alt="Totals"/>
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
        </Container>
    )
}