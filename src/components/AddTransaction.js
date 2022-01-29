import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () =>{
    const[text,setText]             = useState('');
    const[amount,setAmount]         = useState(0);

    const{addTransaction} = useContext(GlobalContext);

    const Prevent = e =>{
        e.preventDefault();
    

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction);
    }

    return(
        <>
        <h3>Add New Transaction </h3>
        <form onSubmit={Prevent}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...' />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount 
                <br></br>
                (negative - expense, positive - income)
                </label>
                <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount...' />
            </div>
            <button  className='btn'>Add Transaction</button>
        </form>
        </>
    )
}
export default AddTransaction;