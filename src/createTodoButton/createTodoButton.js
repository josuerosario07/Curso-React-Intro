function CreateTodoButton({ setOpenModal, openModal }) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg fixed bottom-6 right-6 transition-transform transform hover:scale-105 z-40 text-2xl w-14 h-14 flex items-center justify-center"
            onClick={() => {
                setOpenModal(!openModal);
            }}>
            +
        </button>
    );
}

export { CreateTodoButton };