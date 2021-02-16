import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

import Todo from '../Todo'

interface Todo {
  id: number
  task: string
  completed: boolean
}

interface Props {
  Todos: Todo[]
  removeTodo: (todoId: number) => void
}

const TodoList: React.FC<Props> = ({ Todos, removeTodo }) => {
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
