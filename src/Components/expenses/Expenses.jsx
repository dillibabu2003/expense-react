import ExpenseForm from "../expense_form/ExpenseForm"
import ExpenseList from "../expenses_list/ExpensesList"
import './Expenses.css'
import { useState } from "react"
  
  
    
const EXPENSES=[{
    name:'Fridge',
    amount: 2000,
    date: new Date()
  },{
    name:'phone',
    amount: 4000,
    date: new Date()
}]

const Expenses=()=>{
    const [expenses, setExpenses]=useState(EXPENSES);

    const addExpense=(newObj)=>{
        setExpenses([...expenses,newObj]);
    }

    return (
      <div className="expenses">
        <h1>Expenses</h1>
        <ExpenseForm addExpense={addExpense}/>
        <ExpenseList list={expenses}/>
      </div>
    )
  }
 
  export default Expenses