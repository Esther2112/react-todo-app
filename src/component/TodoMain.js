import React from 'react';
import TodoItem from "./TodoItem";

import './scss/TodoMain.scss'

const TodoMain = ({todoList}) => {

    // console.log(props.todoList);
    const renderTodoItem = () => {
        const todoItems = [];
        for(const todo of todoList) {
            todoItems.push(<TodoItem />)
        }
        return todoItems;
    }

    return (
        <ul className='todo-list'>
            {
                renderTodoItem()
            }
        </ul>
    );
};

export default TodoMain;