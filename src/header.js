import { CreateTodoButton } from "./createTodoButton";

function Header() {
    return (
        <header className=" bg-gray-800  headerCounter">
            <div className=" max-w-7xl px-4 py-6 sm:px-6 lg:px-8 itemHeaderContent">
                <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                <CreateTodoButton />

            </div>
        </header>
    )
}

export { Header };