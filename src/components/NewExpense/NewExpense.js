import { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
    const [expenseForm, setExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);

        setExpenseForm(false);
    };

    const closeFormHandler = () => {
        setExpenseForm(false);
    };

    const addExpenseHandler = () => {
        // console.log("click");
        setExpenseForm(true);
    };

    return (
        <div className="new-expense">
            {expenseForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCloseForm={closeFormHandler}
                ></ExpenseForm>
            ) : (
                <button onClick={addExpenseHandler}>Add New Expense</button>
            )}

            {/* <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
            ></ExpenseForm> */}
        </div>
    );
};

export default NewExpense;
