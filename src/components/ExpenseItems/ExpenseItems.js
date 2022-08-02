import { useState } from "react";

import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./ExpenseItems.css";

function ExpenseItems(props) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const selectedFilterHandler = (filter) => {
        console.log(filter);
        setFilteredYear(filter)
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onSelectedFilter={selectedFilterHandler}
                ></ExpensesFilter>
                <ExpenseItem
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
                ></ExpenseItem>
            </Card>
        </div>
    );
}

export default ExpenseItems;
