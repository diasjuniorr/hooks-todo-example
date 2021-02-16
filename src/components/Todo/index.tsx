import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'

interface Props {
  task: string
  completed: boolean
}

const Todo: React.FC<Props> = ({ task }) => {
  return (
    <>
      <ListItemText>{task}</ListItemText>
    </>
  )
}

export default Todo
