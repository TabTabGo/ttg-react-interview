import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useModalActions } from './../hooks/useModalActions';
import AddTodoModal from './modals/AddTodoModal';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: '100%',
      color: '#fff',
      height: '50px',
      display: 'flex',
      paddingInline: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '5%',
    },
    title: {
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
    },
    addButton: {
      width: '25%',
    },
  })
);

type HeaderProps = {};

const Header: React.FC<HeaderProps> = props => {
  const { } = props;
  const classes = useStyles();
  const { closeModal: closeAddModal, isOpen, openModal: openAddModal } = useModalActions();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h5">
        Todos Management
      </Typography>
      <div className={classes.addButton}>
        <Button
          fullWidth
          onClick={openAddModal}
          variant="contained"
          type="submit"
          color="primary"
          endIcon={<IoIosAdd />}
        >
          Add Todo
        </Button>
      </div>
      <AddTodoModal isOpen={isOpen} closeModal={closeAddModal} onSuccessAdd={closeAddModal} />
    </div>
  );
};

export default Header;
