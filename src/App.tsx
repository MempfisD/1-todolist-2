import React from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';

function App() {
	const todoListTitle_1 = 'What to learn'
	const todoListTitle_2 = 'What to buy'

	const tasks_1: TaskType[] = [
		{id: 1, isDone: true, title: 'HTML & CSS'},
		{id: 2, isDone: true, title: 'JS/TS'},
		{id: 3, isDone: false, title: 'React & Redux'}
	]
	const tasks_2: TaskType[] = [
		{id: 4, isDone: true, title: 'Water'},
		{id: 5, isDone: true, title: 'Apple'},
		{id: 6, isDone: false, title: 'Banana'}
	]

	return (
			<div className="App">
				<TodoList title={todoListTitle_1} tasks={tasks_1}/>
				<TodoList title={todoListTitle_2} tasks={tasks_2}/>
			</div>
	);
}

export default App;
