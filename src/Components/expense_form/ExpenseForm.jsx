import { useState } from "react"
import "./ExpenseForm.css"


const ExpenseForm=(props)=>{
     const {addExpense}=props

    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
    const [isOpen, setOpen]=useState('');


    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleAmountChange=(e)=>{
        setAmount(e.target.value);
    }
    
    const handleDateChange=(e)=>{
        setDate(e.target.value);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const data={
            name: title,
            amount: amount,
            date: new Date(date)
        }
        addExpense(data);
        setTitle('')
        setAmount('')
        setDate('')
    }

    const openForm=()=>setOpen(true)
    const closeForm=()=>setOpen(false)

     return (
        <div className="new-expense">
            <form className="expense-form" value={title} onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label>Title</label>
                    <input type="text" onChange={handleTitleChange}/>
                </div>
                <div className="input-group">
                    <label>Amount</label>
                    <input type="text" value={amount} onChange={handleAmountChange}/>
                </div>
                <div className="input-group">
                    <label>Date</label>
                    <input type="date" value={date} onChange={handleDateChange}/>
                </div>
                <div className="form-control-buttons">
                    <button>
                        cancel
                    </button>
                    <button type="submit">
                        Add Expenses
                    </button>
                </div>
            </form>
        </div>
     )
}
export default ExpenseForm