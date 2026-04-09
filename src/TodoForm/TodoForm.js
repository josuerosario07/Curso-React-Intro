import React from 'react';

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-md flex flex-col gap-4"
        >
            <label className="text-xl font-bold text-gray-800 text-center">
                Escribe tu nuevo TODO
            </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
                className="border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            />
            <div className="flex justify-end gap-3 mt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors shadow"
                >
                    Añadir TODO
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
