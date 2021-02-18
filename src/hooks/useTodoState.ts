import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
  id: string
  completed: boolean
  task: string
}
export default (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState(initialTodos)

  return {
    todos,
    addNewTodo: (newTodoTitle: string) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoTitle, completed: false },
      ])
    },

    removeTodo: (todoId: string) => {
      const updatedTodos = todos.filter((item: Todo) => item.id != todoId)
      setTodos(updatedTodos)
    },

    updateTodoStatus: (todoId: string) => {
      const updatedTodos = todos.map((item: Todo) => {
        if (item.id === todoId) {
          item.completed = !item.completed
          return item
        }
        return item
      })

      setTodos(updatedTodos)
    },

    updateTodo: (todoId: string, newTodoTask: string) => {
      const updatedTodos = todos.map((item: Todo) => {
        if (item.id === todoId) {
          item.task = newTodoTask
          return item
        }
        return item
      })

      setTodos(updatedTodos)
    },
  }
}
