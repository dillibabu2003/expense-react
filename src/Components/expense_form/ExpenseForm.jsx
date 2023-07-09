import { useState,useEffect } from "react"
import "./ExpenseForm.css"
import { toast } from "react-toastify";



const ExpenseForm=(props)=>{
     const {addExpense,editData,setEditData}=props

    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
    const [isOpen, setIsOpen]=useState(false);
     
    console.log(editData);
    useEffect(()=>{
     console.log("edit ==>",editData);
     if(editData.id){
        setIsOpen(true);
        setTitle(editData.name)
        setAmount(editData.amount)
        setDate(editData.date.toISOString().split('T')[0])
     }
    },[editData])

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
        if(!title || !amount || !date){
             toast.error("Please Enter all the Fields");
            return;
        }
        const data={
            name: title,
            amount: amount,
            date: new Date(date)
        }
        if(editData?.id){
            data.id=editData.id
            editExpense(data)
        }else{
            addExpense(data)
        }
        toast.success(title +" Added Successfully");
        setTitle('')
        setAmount('')
        setDate('')
    }
     

    const handleForm = (e) =>{
        setIsOpen(true);
    }

    const handleCancelChange = (e) => {
        setEditData({})
        setTitle('')
        setAmount('')
        setDate('')
        setIsOpen(false);
    }
     return (
        <div className="new-expense">{
            isOpen?<>
            <form className="expense-form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label>Title</label>
                    <input type="text"  value={title}  onChange={handleTitleChange}/>
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
                     <button onClick={handleCancelChange}>
                        Cancel
                    </button>
                    
                    <button type="submit">
                        {/* Add Expenses */}
                        {editData.id?'Edit Expense':'Add Expense'}
                    </button>
                </div>
            </form></>:(<div>
            <button  className='header' onClick={handleForm}>New Expense</button>
        </div>)
        }
        </div>
     )
}
export default ExpenseForm