import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

import { GET_ALL_PROJECTS, REMOVE_PROJECT } from '../helpers/queries'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AddForm from './AddForm'
import EditForm from './EditForm'
import AlertMessage from '../Alerts/AlertMessage'
import { Grid, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));


const DisplayProjects = () => {

  const styles = useStyles()
  const history = useHistory()
  const [deleteItem] = useMutation(REMOVE_PROJECT)
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS)
  const [status, setStatusBase] = useState('')
  const [resultMessage, setResultMessage] = useState('')
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const onDelete = (id, e) => {
    e.preventDefault()
    deleteItem({
      variables: { id },
      refetchQueries: [{ query: GET_ALL_PROJECTS }]
    }).then(
      res => handleSuccess(res),
      err => handleError(err)
    )

  }

  // Handles Result of the Delete Operation
  const handleSuccess = (res) => {
    console.log(res.data.deleteProject.proj_name)
    // console.log('success!');
    setResultMessage(res.data.deleteProject.proj_name)
    setStatusBase({
      msg: `Successfully Deleted ${resultMessage}`,
      key: Math.random()
    })
  }
  const handleError = (err) => {
    console.log('error')
  }

  //Handles the Modal for Add Project
  const handleAddOpen = () => {
    setAddOpen(true);
  };
  const handleAddClose = () => {
    setAddOpen(false);
  };

//Handles the Modal for Edit Project
  const handleEditOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
    history.push('/projects')
  };


  if (loading) return (
    <div className = {styles.progress}>
    <CircularProgress />
    </div>
  )
  if (error) return `Error: ${error.message}`
  return (
    <div>
      <div style={{ marginTop: 20, padding: 30 }}>
        <Grid container spacing={8} justify='center' alignItems='center'>
          {data.projects.map(p => {
            return (
              <Grid item key={p._id}>
                <Card >
                  <CardActionArea>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <CardMedia
                        style={{ width: 400, height: 100, paddingTop: 10, }}
                        component='img'
                        alt='Project Image'
                        height='140'
                        image={require('../../images/html-css-javascript-lg.jpg')}
                      />
                    </div>
                    <CardContent >
                      <Typography gutterBottom variant='h5' component="h2">
                        {p.proj_name}
                      </Typography>
                      <Typography component='p'>
                        {p.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button>
                      <DeleteIcon onClick={e => onDelete(p._id, e)} />
                    </Button>
                    <Button onClick={handleEditOpen}>
                    <Link to = {`/edit/${p._id}`}>
                      <Modal
                        open={editOpen}
                        onClose={handleEditClose}
                        // closeAfterTransition
                        BackdropComponent={Backdrop}
                        className={styles.modal}
                      >
                        <Fade in={editOpen}>
                          <div className={styles.paper}>
                            <EditForm />
                            </div>
                            </Fade>
                            </Modal>
                            </Link>
                      <EditIcon />
                      </Button>
                  </CardActions>
                </Card>
                { status ? <AlertMessage key={status.key} message={status.msg} /> : null}
              </Grid>
            )
          }
          )}

        </Grid>
        <Button type='button' onClick={handleAddOpen}>Add Project</Button>
        <Modal
          open={addOpen}
          onClose={handleAddClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          className={styles.modal}
        >
          <Fade in={addOpen}>
            <div className={styles.paper}>
              <AddForm close={handleAddClose} />
            </div>
          </Fade>
        </Modal>



      </div>
    </div >
  )
}

export default DisplayProjects
