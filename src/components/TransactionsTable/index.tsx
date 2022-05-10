import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles"

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export const TransactionsTable: React.FC = () => {
    const [ transactions, setTransactions ] = useState<Transaction[]>([]);
    const data = useContext(TransactionsContext);

    useEffect(() => {
        api.get('/transactions')
        .then((response: any) =>setTransactions(response.data.transactions))
    }, [])

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
                    {transactions.map((transaction) => {
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