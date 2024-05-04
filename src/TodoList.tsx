import {Button} from './Button';
import {TodoListHeader} from './TodoListHeader';

type TodoListPropsType = {
	title: string
	tasks: TaskType[]
}

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export const TodoList = ({title, tasks}: TodoListPropsType) => {
	// * через if
	// let tasksList
	// if (tasks.length === 0) {
	// 	tasksList = <span>Список пуст</span>
	// } else {
	// 	tasksList =
	// 			<ul>
	// 				{
	// 					tasks.map((task: TaskType) => {
	// 						return <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
	// 					})
	// 				}
	// 			</ul>
	// }

	const tasksList: JSX.Element = tasks.length === 0
			? <span>Список пуст</span>
			: <ul>
				{
					tasks.map((task: TaskType) => {
						return <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
					})
				}
			</ul>

	return (
			<div className="todoList">
				<div>
					<TodoListHeader title={title}/>
					<input/>
					<Button title={'+'}/>
				</div>
				{tasksList}
				<div>
					<Button title={'All'}/>
					<Button title={'Active'}/>
					<Button title={'Completed'}/>
				</div>
			</div>
	);
};