import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

import Todo from '../Todo'

interface Todo {
  id: string
  task: string
  completed: boolean
}

interface Props {
  Todos: Todo[]
  removeTodo: (todoId: string) => void
  updateTodo: (todoId: string) => void
}

const TodoList: React.FC<Props> = ({ Todos, removeTodo, updateTodo }) => {
  return (
    <>
      <Paper>
        <List>
          {Todos.map((todo) => {
            return (
              <>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                />
                <Divider />
              </>
            )
          })}
        </List>
      </Paper>
    </>
  )
}

export default TodoList
