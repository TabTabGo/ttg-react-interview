/** @format */
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
} from '@material-ui/core';
import React from 'react';
import { useCallback } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import { useTodoServices } from '../../hooks/useTodoServices';
import { CreateTaskType } from '../../../../types/Task';
import { BaseInputModal } from './types';

interface IAddTodoModalProps extends BaseInputModal {
    onSuccessAdd: () => void;
}

export const validationSchema = yup.object().shape({
    title: yup.string().required('Enter Title'),
});

const useStyles = makeStyles(theme =>
    createStyles({
        dialogContent: {
            height: '200px',
            position: 'relative',
        },
        errorMessage: {
            color: theme.palette.error.main,
            marginLeft: '10px',
        },
        actions: {
            position: 'absolute',
            bottom: '10px',
            right: '22px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        },
    })
);

const AddTodoModal: React.FC<IAddTodoModalProps> = props => {
    const { isOpen, closeModal, onSuccessAdd } = props;
    const classes = useStyles();
    const { addTodo } = useTodoServices();

    const onSubmit = useCallback((data: CreateTaskType) => {
        addTodo(data);
        onSuccessAdd();
    }, []);
    return (
        <Dialog maxWidth="sm" fullWidth open={isOpen} onClose={closeModal}>
            <DialogTitle id="alert-dialog-title">Add New Todo</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        title: '',
                        description: '',
                    }}
                    onSubmit={onSubmit}
                >
                    {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="addTaskInput"
                                        label="Title"
                                        name="title"
                                        placeholder="Enter Todo Title..."
                                        fullWidth
                                        onChange={handleChange}
                                        value={values.title}
                                        variant="outlined"
                                        margin="dense"
                                        autoFocus={true}
                                    />
                                    <ErrorMessage name="title" component={'div'} className={classes.errorMessage} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="addTaskInput"
                                        label="Description"
                                        name="description"
                                        placeholder="Enter Todo Description..."
                                        fullWidth
                                        onChange={handleChange}
                                        value={values.description}
                                        variant="outlined"
                                        margin="dense"
                                    />
                                </Grid>
                            </Grid>
                            <div className={classes.actions}>
                                <Button
                                    onClick={closeModal}
                                    type="button"
                                    style={{ width: '100px' }}
                                    variant="outlined"
                                >
                                    Exit
                                </Button>
                                <Button
                                    style={{ width: '100px' }}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Add
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;
