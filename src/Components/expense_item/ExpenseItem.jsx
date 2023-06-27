import ExpenseDate from "../expense_date/ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const {expense}=props

    const {name,amount,date}=expense;
  return (
    <div className="card expense-item">
        <ExpenseDate date={date}/>
        <h2>{name}</h2>
        <div className="expense-amount">${amount}</div>
     </div>
  )
}

export default ExpenseItem