import React, { useEffect, useState } from "react";

const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {}
})

export default function App() {
  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/users")
    const todos = await response.json()
    setTodos(todos.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <TodosContext.Provider value={{todos, fetchTodos}}>
        {todos.users.id}
    </TodosContext.Provider>
  )
}
