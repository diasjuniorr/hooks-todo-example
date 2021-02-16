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
}

const TodoList: React.FC<Props> = ({ Todos }) => {
  return (
    <>
      <Paper>
        <List>
          {Todos.map((todo) => {
            return (
              <>
                <Todo
                  key={todo.id}
                  task={todo.task}
                  completed={todo.completed}
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
