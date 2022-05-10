import { useEffect, useState } from "react"
import { api } from "../../services/api"
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
                    { transactions.map((transaction) => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}