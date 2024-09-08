import Guest from "@/components/guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/transactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest></Guest>;
  }


  return ( 
  <main>
    <h2>Welcome, { user.firstName }</h2>
    <Balance></Balance>
    <IncomeExpense></IncomeExpense>
    <AddTransaction></AddTransaction>
    <TransactionList></TransactionList>
  </main> 
  );
}
 
export default HomePage;