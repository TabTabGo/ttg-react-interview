import { createStyles, makeStyles } from '@material-ui/core/styles';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Task } from '../../../types/Task';
import { IoEyeSharp } from 'react-icons/io5';
import { useModalActions } from './../hooks/useModalActions';
import TodoDetailsModal from './modals/TodoDetailsModal';
import IconButton from '@material-ui/core/IconButton';
import { useTodoServices } from './../hooks/useTodoServices';
import { useCallback } from 'react';

const useStyles = makeStyles(theme =>
    createStyles({
        container: {
            borderLeft: '3px solid',
            borderColor: theme.palette.primary.main,
            padding: 8,
            cursor: 'pointer',
            background: theme.palette.grey['200'],
            display: 'flex',
            alignItems: 'center',
            '&:hover $actions': {
                opacity: 100, // Show child on hover
            },
        },
        title: {
            width: '88%',
        },
        actions: {
            width: '10%',
            opacity: 0,
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'end',
            transitionDuration: '.5',
            transition: 'opacity 0.5s ease, visibility 0.5s ease', // Add transition
        },
        removeIcon: {
            color: theme.palette.error.main,
        },
        detailsIcon: {
            color: theme.palette.primary.main,
        },
    })
);

type TodoCardProps = {
    task: Task;
};

const TodoCard: React.FC<TodoCardProps> = props => {
    const classes = useStyles();
    const { task } = props;
    const { openModal: openDetailsModal, isOpen, closeModal: closeDetailsModal } = useModalActions();
    const { deleteTodo } = useTodoServices();

    const handleDeleteButton = useCallback(() => {
        deleteTodo(task.id);
    }, [task]);
    return (
        <div className={classes.container}>
            <div className={classes.title}>{task.title}</div>
            <div className={classes.actions}>
                <IconButton onClick={openDetailsModal} className={classes.detailsIcon}>
                    {' '}
                    <IoEyeSharp size={20} />
                </IconButton>
                <IconButton className={classes.removeIcon} onClick={handleDeleteButton}>
                    {' '}
                    <RiDeleteBin6Fill size={20} />
                </IconButton>
            </div>

            <TodoDetailsModal task={task} isOpen={isOpen} closeModal={closeDetailsModal} />
        </div>
    );
};

export default TodoCard;
