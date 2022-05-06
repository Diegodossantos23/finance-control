import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header: React.FC = () => {
    return(
        <Container>
            <Content>
                <img src={logo} alt="finance control"/>
                <button type="button">
                New transaction
                </button>
            </Content>
        </Container>
    )
}