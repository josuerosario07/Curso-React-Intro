import './todoCounter.css';


function TodoCounter(props) {
    return (
        <div className="px-4 sm:px-0 counter">
            <h3 className="text-base/7 font-semibold text-white">Has completado {props.completed} tareas de {props.total} en tu todo List de pendientes</h3>
        </div>
    )
}

export { TodoCounter };
