import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
    return (

        <div className="buscador">
            <input placeholder="Buscar tarea" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}>
            </input>
        </div>
    )
}
export { TodoSearch };