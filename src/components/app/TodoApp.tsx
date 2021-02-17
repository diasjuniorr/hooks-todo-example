import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import { v4 as uuidv4 } from 'uuid'

import TodoForm from '../TodoForm'
import TodoList from '../TodoList'

import { paperStyle } from './style'

const TodoApp = () => {
  console.log('uuid', uuidv4())
  const initialTodos = [
    { id: uuidv4(), task: 'Bath the dogs', completed: false },
    { id: uuidv4(), task: 'Do the dishes', completed: true },
  ]
  const [todos, setTodos] = useState(initialTodos)

  const addNewTodo = (newTodoTitle: string) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoTitle, completed: false }])
  }
  const removeTodo = (todoId: string) => {
    const updatedTodos = todos.filter((item) => item.id != todoId)
    setTodos(updatedTodos)
  }

  const updateTodoStatus = (todoId: string) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todoId) {
        item.completed = !item.completed
        return item
      }
      return item
    })

    setTodos(updatedTodos)
  }
  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
        <Grid container justify="center">
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addNewTodo} />
            <TodoList
              Todos={todos}
              removeTodo={removeTodo}
              updateTodo={updateTodoStatus}
            />
          </Grid>
        </Grid>
      </AppBar>
    </Paper>
  )
}

export default TodoApp
