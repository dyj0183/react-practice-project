// use the css file we created
import "./ExpenseItem.css";
// use ExpenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import Note from "./Note";

// a component in React is just a sepcial kind of function
// props is an object that contains key value pairs data passed in from App.js
function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<Note note={props.note}></Note>
				<div className="expense-item__price">$ {props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
