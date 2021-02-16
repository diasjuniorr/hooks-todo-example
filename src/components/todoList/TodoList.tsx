import React from 'react'

interface Todo {
  id: number
  task: string
  completed: boolean
}

interface Props {
  Todos: Todo[]
  Test: string
}

const TodoList: React.FC<Props> = ({ Todos, children }) => {
  return (
    <>
      <h1>TODO LIST</h1>
    </>
  )
}

export default TodoList
