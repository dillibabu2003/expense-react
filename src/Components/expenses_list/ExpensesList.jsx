import ExpenseItem from "../expense_item/ExpenseItem"
import "./ExpensesList.css"

const ExpenseList=(props)=>{
      const {list,deleteExpense,setEditData}=props;
      // console.log("list ==>"+list)
      if(list.length===0){
            return(<>
              <div className="no-expense-list">NO EXPENSE FOUND</div>
            </>)
      }
      return (
      <div className="expenses-list">
              {list.map((item,index)=> <ExpenseItem key={item.name} expense={item} deleteExpense={deleteExpense} setEditData={setEditData}/>)}
      </div>
      )
            
}
export default ExpenseList