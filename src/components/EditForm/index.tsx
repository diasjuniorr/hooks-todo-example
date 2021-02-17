import React, { FormEvent } from 'react'
import useInputState from '../../hooks/useInputState'
import TextField from '@material-ui/core/TextField'

interface Props {
  todoId: string
  task: string
  updateTodo: (todoId: string, newTodoTask: string) => void
  toggle: () => void
}

const EditForm: React.FC<Props> = ({ todoId, task, updateTodo, toggle }) => {
  const [value, setValue] = useInputState(task)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateTodo(todoId, value)
    toggle()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth value={value} onChange={setValue} />
      </form>
    </>
  )
}

export default EditForm
