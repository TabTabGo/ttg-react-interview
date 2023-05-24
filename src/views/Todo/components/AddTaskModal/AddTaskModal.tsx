import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import { useAppDispatch } from '../../../../hooks/useAppDipatch';
import { TodoActions } from '../../redux/actions';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddTaskModalForm from '../AddTaskForm/AddTaskForm';
import { useStyles } from './styles';

type AddTaskModalProps = {
  onAddTaskModal?: (todo: string) => void;
};

const AddTaskModal = ({ onAddTaskModal }: AddTaskModalProps) => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        color="secondary"
        aria-label="upload picture"
        component="span"
        onClick={handleOpen}
      >
        <AddCircleIcon
          fontSize={'large'}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <div  className={styles.title}>Add New Task</div>
            <AddTaskModalForm onSubmit={handleClose} setOpen={setOpen}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
