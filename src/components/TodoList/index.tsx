import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined'

import Todo from '../Todo'

interface Todo {
  id: string
  task: string
  completed: boolean
}

interface Props {
  todos: Todo[]
  removeTodo: (todoId: string) => void
  updateTodoStatus: (todoId: string) => void
  updateTodo: (todoId: string, newTodoTask: string) => void
}

const TodoList: React.FC<Props> = ({
  todos,
  removeTodo,
  updateTodoStatus,
  updateTodo,
}) => {
  if (todos.length)
    return (
      <>
        <Paper>
          <List>
            {todos.map((todo, index) => {
              return (
                <>
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeTodo={removeTodo}
                    updateTodoStatus={updateTodoStatus}
                    updateTodo={updateTodo}
                  />
                  {index < todos.length - 1 && <Divider />}
                </>
              )
            })}
          </List>
        </Paper>
      </>
    )
  return null
}

export default TodoList
