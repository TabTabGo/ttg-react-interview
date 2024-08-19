/** @format */
import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Task } from '../../../../types/Task';
import { BaseInputModal } from './types';

interface TodoDetailsModalProps extends BaseInputModal {
    task: Task;
}

const useStyles = makeStyles(theme =>
    createStyles({
        dialogTitle: {
            position: 'relative',
        },
        closeIcon: {
            position: 'absolute',
            top: '10px',
            right: '10px',
        },

        title: {
            fontSize: '16px',
            fontWeight: 600,
            marginBottom: 4,
            color: 'red',
        },
        value: {
            fontWeight: 600,
            fontSize: '14px',
            color: '#000',
        },
        dialogContent: {
            paddingBlock: 15,
        },
    })
);

const TodoDetailsModal: React.FC<TodoDetailsModalProps> = props => {
    const { isOpen, task, closeModal } = props;
    const classes = useStyles();
    return (
        <Dialog maxWidth="sm" fullWidth open={isOpen} onClose={closeModal}>
            <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
                Todo Details
                <IconButton onClick={closeModal} className={classes.closeIcon}>
                    <IoMdClose color="#fff" />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <p className={classes.title}>
                            Title: <span className={classes.value}>{task.title}</span>{' '}
                        </p>
                    </Grid>

                    <Grid item xs={12}>
                        <p className={classes.title}>
                            Description:{' '}
                            <span className={classes.value}>{task?.description || 'No Description.'}</span>{' '}
                        </p>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default TodoDetailsModal;
