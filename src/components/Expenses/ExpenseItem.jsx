import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props){

    const clickHandler = () =>{
    console.log("button click!")
}

    return (
        
        <Card className='expense-item'>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>

    )
}
export default ExpenseItem;