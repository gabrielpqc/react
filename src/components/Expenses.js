import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './Filter/ExpensesFilter';
import Card from './Card'
import './Expenses.css';

const Expenses = (props) => {

    const [filter, setFilter] = useState('');

    const filterChangeHandler = (filterValue) => {
        setFilter(filterValue);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filter;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;
