import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from '../../components/todoList/TodoList'

import { paperStyle } from './style'

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Bath the dogs', completed: false },
    { id: 2, task: 'Do the dishes', completed: true },
  ]
  const [todos, setTodos] = useState(initialTodos)
  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
        <TodoList Todos={todos} Test={'teste'} />
      </AppBar>
    </Paper>
  )
}

export default TodoApp
