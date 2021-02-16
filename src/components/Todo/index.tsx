import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

interface Props {
  task: string
  completed: boolean
}

const Todo: React.FC<Props> = ({ task, completed }) => {
  return (
    <>
      <ListItem>
        <Checkbox checked={completed} />
        <ListItemText>{task}</ListItemText>
      </ListItem>
    </>
  )
}

export default Todo
