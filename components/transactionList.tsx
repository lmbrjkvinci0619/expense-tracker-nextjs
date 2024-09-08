import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";
import { Transaction } from "@/types/Transaction";

const TransactionList = async () => {
    const { transactions, error } = await getTransactions();

    return ( <>
    <h3>History</h3>
    <ul className="list">
        {transactions && transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction}></TransactionItem>
        ))}
    </ul>
    </> );
}
 
export default TransactionList;