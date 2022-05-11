import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles"

export const TransactionsTable: React.FC = () => {
    const { transactions } = useContext(TransactionsContext);

    return(
        <Container >
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                {new Intl.DateTimeFormat('pt-br').format(
                                    new Date(transaction.createdAt)
                                )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}