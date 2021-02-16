import React, { useEffect, FormEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

import useInputState from '../../hooks/useInputState'

interface Props {
  addTodo: (newTodoTitle: string) => void
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(value)
    reset()
  }
  return (
    <Paper style={{ margin: '1rem 0', padding: ' 0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label="Add New Todo"
          margin="normal"
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
