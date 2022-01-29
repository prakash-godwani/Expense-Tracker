import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GloblaProvider } from './context/GlobalState';

function App() {
  return (
    <GloblaProvider >
      <Header />
      <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <h1>gggg</h1>
      <AddTransaction />
      </div>
    </GloblaProvider>
  );
}

export default App;
