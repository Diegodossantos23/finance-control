import { Container } from "./styles"

export const TransactionsTable: React.FC = () => {
    return(
        <Container >
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Development</td>
                        <td>06/05/2022</td>
                    </tr>
                    <tr>
                        <td>Website Development</td>
                        <td className="withdraw">- R$12.000,00</td>
                        <td>Development</td>
                        <td>06/05/2022</td>
                    </tr>
                    <tr>
                        <td>Website Development</td>
                        <td>R$12.000,00</td>
                        <td>Development</td>
                        <td>06/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}