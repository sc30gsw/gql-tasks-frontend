import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from '@mui/material'
import { Task } from '../types/task'
import { TaskStatus } from '../types/taskStatus'

type EditTaskProps = {
  task: Task
  userId: number
}

const EditTask = ({ task, userId }: EditTaskProps) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(task.name)
  const [dueDate, setDueDate] = useState(task.dueDate)
  const [description, setDescription] = useState(task.description)
  const [status, setStatus] = useState(task.status)
  const [isInvalidName, setIsInvalidName] = useState(false)
  const [isInvalidDueDate, setIsInvalidDueDate] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Tooltip title="編集">
        <IconButton onClick={handleClickOpen}>
          <EditIcon color="action" />
        </IconButton>
      </Tooltip>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Task Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={isInvalidName}
            helperText={isInvalidName && 'タスク名を入力してください'}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="task-status-label">Status</InputLabel>
            <Select
              labelId="task-status-label"
              id="task-status"
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
            >
              <MenuItem value={'NOT_STARTED'}>Not Started</MenuItem>
              <MenuItem value={'IN_PROGRESS'}>In Progress</MenuItem>
              <MenuItem value={'COMPLETED'}>Completed</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="normal"
            id="due-date"
            label="Due Date"
            placeholder="yyyy-mm-dd"
            fullWidth
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            error={isInvalidDueDate}
            helperText={isInvalidDueDate && '日付形式で入力してください'}
          />
          <TextField
            autoFocus
            margin="normal"
            id="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditTask
