import { FaTrashAlt, FaCheckSquare } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";


function TodoItem(props) {
    return (
        <li className="text-sm/6 font-semibold text-white">
            <div className="flex items-center gap-2 left-side"
                style={{ cursor: 'pointer' }} onClick={props.onComplete}>
                <span
                    className={props.completed ? 'status-list' : 'status-list-false'}>
                    {props.completed ? <FaCheckSquare /> : <CgSandClock />
                    }

                </span>
                <p className={props.completed ? 'line-through' : ''}>{props.text}</p>
            </div>
            <span className="icon-delete" onClick={props.onDelete} style={{ cursor: 'pointer' }}>
                <FaTrashAlt />
            </span>
        </li>
    )
}

export { TodoItem };