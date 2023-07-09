import { nanoid } from "nanoid"
import ExpenseForm from "../expense_form/ExpenseForm"
import ExpenseList from "../expenses_list/ExpensesList"
import './Expenses.css'
import { useState } from "react"
  
  
    
const EXPENSES=[{
    id: nanoid(),
    name:'Fridge',
    amount: 2000,
    date: new Date()
  },{
    id: nanoid(),
    name:'phone',
    amount: 4000,
    date: new Date()
}]

const Expenses=()=>{
    const [expenses, setExpenses]=useState(EXPENSES);
    const [editData, setEditData]=useState({});

    const addExpense=async(newObj)=>{
         newObj.id=nanoid();
        setExpenses([...expenses,newObj])
         await fetch('https://localhost:5000/expense/create',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(newObj)
         })
       
    }
    const deleteExpense=(id)=>{
      const filteredExpense=expenses.filter((exp)=>{
               return exp.id!=id;
      })
      setExpenses(filteredExpense);
    }

    const editExpense=(obj)=>{
      const editedExpense=expenses.map((exp)=>{
        if(exp.id===obj.id){
          return obj
        }
        return exp
      })
      setExpenses(editedExpense);
    }

    return (
      <div className="expenses">
        <h1>Expenses</h1>
        <ExpenseForm addExpense={addExpense} editData={editData} setEditData={setEditData} editExpense={editExpense}/>
        <ExpenseList list={expenses} deleteExpense={deleteExpense} setEditData={setEditData}/>
      </div>
    )
  }
 
  export default Expenses