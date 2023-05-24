import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import { useAppDispatch } from '../../../../hooks/useAppDipatch';
import { TodoActions } from '../../redux/actions';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import AddTaskForm from '../AddTaskForm/AddTaskForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      boxShadow: theme.shadows[24],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

type AddToDoProps = {
  onAddTask?: (todo: string) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { addTodo } = new TodoActions();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOpen}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add New Task</h2>
            <AddTaskForm onSubmit={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddTodo;
