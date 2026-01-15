function TodoItem(props) {
    return (
        <li className="text-sm/6 font-semibold text-white">
            <div className="flex items-center gap-2 left-side">
                <span className={props.completed ? 'status-list' : 'status-list-false'}>{props.completed ? 'completed' : 'pending'}</span>
                <p className={props.completed ? 'line-through' : ''}>{props.text}</p>
            </div>
            <span>X</span>
        </li>
    )
}

export { TodoItem };