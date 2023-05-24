import React from 'react';
import TodoInput from "./TodoInput";
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

    //서버에 할일 목록(json)을 요청해서 받아와야 함
    const todos = [
        {
            id: 1,
            title: '오늘 주간 신문 읽기',
            done: true
        },
        {
            id: 2,
            title: '산책하기',
            done: false
        },
        {
            id: 3,
            title: '밥먹기',
            done: true
        },
        {
            id: 4,
            title: '공부하기',
            done: false
        },
    ];


    return (
        <div className='TodoTemplate'>
            <TodoHeader />
            <TodoMain todoList = {todos} />
            <TodoInput />
        </div>
    );
};

export default TodoTemplate;