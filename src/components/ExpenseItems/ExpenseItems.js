import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

import "./ExpenseItems.css";

function ExpenseItems(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const selectedFilterHandler = (filter) => {
        console.log(filter);
        setFilteredYear(filter);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onSelectedFilter={selectedFilterHandler}
                ></ExpensesFilter>

                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}

                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        ></ExpenseItem>
                    ))} */}

                {/* CICLO SU ARRAY DI ELEMENTI */}

                {/* <ExpenseItem
                    title={props.expense[0].title}
                    amount={props.expense[0].amount}
                    date={props.expense[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.expense[1].title}
                    amount={props.expense[1].amount}
                    date={props.expense[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.expense[2].title}
                    amount={props.expense[2].amount}
                    date={props.expense[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.expense[3].title}
                    amount={props.expense[3].amount}
                    date={props.expense[3].date}
                ></ExpenseItem> */}
            </Card>
        </div>
    );
}

export default ExpenseItems;
