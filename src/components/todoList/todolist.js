import Todo from '../todo/todo.js';
import styles from './todoList.css';
import {PropTypes} from 'prop-types';

const TodoList = ({todos,onToggleDone,removeTodo,modifyList,makeModif}) => {
    return(
        <ul className="todo-list">
            { todos.map( todo => <Todo {...todo} key={todo.id} onToggleDone={onToggleDone} removeTodo={removeTodo} modifyList={modifyList} makeModif={makeModif}/> )}
        </ul> 
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggleDone: PropTypes.func
}

export default TodoList

