import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import { v4 as uuidv4 } from 'uuid'

import TodoForm from '../TodoForm'
import TodoList from '../TodoList'

import { paperStyle } from './style'

interface Todo {
  id: string
  completed: boolean
  task: string
}

const TodoApp = () => {
  const initialTodos = JSON.parse(
    window.localStorage.getItem('@todo-hooks/todos') || '[]',
  )
  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('@todo-hooks/todos', JSON.stringify(todos))
  }, [todos])

  const addNewTodo = (newTodoTitle: string) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoTitle, completed: false }])
  }
  const removeTodo = (todoId: string) => {
    const updatedTodos = todos.filter((item: Todo) => item.id != todoId)
    setTodos(updatedTodos)
  }

  const updateTodoStatus = (todoId: string) => {
    const updatedTodos = todos.map((item: Todo) => {
      if (item.id === todoId) {
        item.completed = !item.completed
        return item
      }
      return item
    })

    setTodos(updatedTodos)
  }
  const updateTodo = (todoId: string, newTodoTask: string) => {
    const updatedTodos = todos.map((item: Todo) => {
      if (item.id === todoId) {
        item.task = newTodoTask
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
