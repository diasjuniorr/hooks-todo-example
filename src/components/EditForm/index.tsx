import React, { FormEvent } from 'react'
import TextField from '@material-ui/core/TextField'

interface Props {
  todoId: string
  task: string
  updateTodo: (todoId: string, newTodoTask: string) => void
  toggle: () => void
}

const EditForm: React.FC<Props> = ({ todoId, task, updateTodo, toggle }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateTodo(todoId, 'task')
    toggle()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth />
      </form>
    </>
  )
}

export default EditForm
