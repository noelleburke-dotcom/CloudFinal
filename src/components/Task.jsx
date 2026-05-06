function Task({ text }){

    return(
        <li className="task-item">
            <input type="checkbox" 
            checked={completed}
            onChange={onToggle}
            />
            <span className="task-text"> { text } </span>
            <button className="delete-button">ALL DONE!</button>
        </li>
    );
}

export default Task;