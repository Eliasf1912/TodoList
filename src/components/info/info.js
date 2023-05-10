import styles from './info.css';
import PropTypes from 'prop-types';

const info = ({itemCompleted,itemLeft,DeleteAll,showActive,showAll,showCompleted,selected,selected1,selected2}) => {

    const Selected = [];
    Selected.push((selected === false)? "" : "selected");

    const Selected1 = [];
    Selected1.push((selected1 === false)? "" : "selected");

    const Selected2 = [];
    Selected2.push((selected2 === false)? "" : "selected");

    return(
        <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count"><strong>{itemLeft}</strong> item left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
            <ul className="filters">
                <li>
                    <a className={Selected1} onClick={showAll} href="#/">All</a>
                </li>
                <li>
                    <a className={Selected} onClick={showActive}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={showCompleted} className={Selected2}>Completed</a>
                </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button className="clear-completed" onClick={DeleteAll}>Clear completed ({itemCompleted})</button>
		</footer>
    )
}

info.propsTypes = {
    itemCompleted: PropTypes.number,
    itemLeft: PropTypes.number,
    DeleteAll : PropTypes.func,
    showActive: PropTypes.func,
    selected: PropTypes.bool,
    selected1: PropTypes.bool,
    selected2: PropTypes.bool,
    showAll: PropTypes.func,
    showCompleted: PropTypes.func
}

info.defaultProps = {
    itemCompleted: 0,
    itemLeft: 0,
    selected1: true,
    selected2: false,
    selected: false
}

export default info;