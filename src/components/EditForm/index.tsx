import React from 'react'
import TextField from '@material-ui/core/TextField'

interface Props {
  task: string
}

const EditForm: React.FC<Props> = ({ task }) => {
  return <TextField fullWidth value={task} />
}

export default EditForm
