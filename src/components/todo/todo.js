import styles from './todo.css';
import PropTypes from 'prop-types';

const Todo = ({taskName,id,onToggleDone,checked,removeTodo,isSelected,isModify,modifyList,makeModif}) => {

    const doneCSS = [];
    doneCSS.push((!checked) ? '' :'done');
    doneCSS.push((!checked)?'' : 'checked');
    doneCSS.push((!isModify)? '' : 'edit')

    const Display = ["completed"];
    Display.push((isSelected === true)? 'edit' : '')

    const Modify = [];
    Modify.push((isModify === false)? "edit" : "");

    return(
        <li className={Display.join(' ')} onDoubleClick={()=>modifyList(id)}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={()=> onToggleDone(id)}/>
                <label  className={doneCSS.join(' ')}>{taskName}</label>
                <button className="destroy" onClick={()=> removeTodo(id)}></button>
            </div>
            <input className={Modify} onKeyDown={(event) => makeModif(id,event)} placeholder="Create a TodoMVC template"/>
		</li>
    )
}

Todo.propTypes = {
    TaskName: PropTypes.string,
    checked: PropTypes.bool,
    onToggleDone: PropTypes.func,
    removeTodo: PropTypes.func,
    id: PropTypes.number,
    check: PropTypes.bool,
    isSelected: PropTypes.bool,
    modifyList: PropTypes.func,
    isModify: PropTypes.bool,
    makeModif: PropTypes.func
}

Todo.defaultProps = {
    TaskName: "tâche à faire",
    check: false,
    isSelected: false,
    isModify: false
}

export default Todo;