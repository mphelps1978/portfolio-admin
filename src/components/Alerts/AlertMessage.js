import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const AlertMessage = (props) => {
  const [open, setOpen] = useState(true)

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') {
      return
    }
    setOpen(false)
  }


  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={props.message}
        action={
          <IconButton
            key='close'
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}>
          <CloseIcon
            fontSize="small" />
          </IconButton>
        }
      />

    </div>
  )
}
export default AlertMessage



