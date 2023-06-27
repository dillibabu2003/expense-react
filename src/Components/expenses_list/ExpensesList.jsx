import ExpenseItem from "../expense_item/ExpenseItem"
import "./ExpensesList.css"

const ExpenseList=(props)=>{
      const {list}=props;
      console.log("list ==>"+list)
      return (
      <div className="expenses-list">
              {list.map((item)=> <ExpenseItem key={item.name} expense={item}/>)}
      </div>
      )
            
}
export default ExpenseList