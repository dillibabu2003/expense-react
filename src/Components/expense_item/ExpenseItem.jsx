import ExpenseDate from "../expense_date/ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const {expense,index,deleteExpense,setEditData}=props

    const {id,name,amount,date}=expense;
  return (
    <div className="card expense-item">
        <ExpenseDate date={date}/>
        <h2>{name}</h2>
        <div className="expense-amount">${amount}</div>
        <button className="delete-button"onClick={()=>deleteExpense(id)}>Delete</button>
        <button className="edit-button"onClick={()=>setEditData(expense)}>Edit</button>
     </div>
  )
}

export default ExpenseItem