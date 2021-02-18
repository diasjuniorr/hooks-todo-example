import React, { useState, useEffect } from 'react'
import useTodoState from '../../hooks/useTodoState'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import TodoForm from '../TodoForm'
import TodoList from '../TodoList'

import { paperStyle } from './style'

const TodoApp = () => {
  const initialTodos = JSON.parse(
    window.localStorage.getItem('@todo-hooks/todos') || '[]',
  )
  const {
    todos,
    addNewTodo,
    removeTodo,
    updateTodoStatus,
    updateTodo,
  } = useTodoState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('@todo-hooks/todos', JSON.stringify(todos))
  }, [todos])

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
              todos={todos}
              removeTodo={removeTodo}
              updateTodoStatus={updateTodoStatus}
              updateTodo={updateTodo}
            />
          </Grid>
        </Grid>
      </AppBar>
    </Paper>
  )
}

export default TodoApp
