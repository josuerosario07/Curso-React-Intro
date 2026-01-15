function CreateTodoButton() {
    return (
        <button className="createTodoButton" onClick={(event) => {
            console.log('click');
            console.log(event);
        }}>Agregar Tarea</button>
    )
}

export { CreateTodoButton };