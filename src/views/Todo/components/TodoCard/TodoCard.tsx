import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Avatar from '@material-ui/core/Avatar';
import { ITask } from 'interfaces/ITask';
import { useStyles } from './styles';
import { useAppDispatch } from 'hooks/useAppDipatch';
import { TodoActions } from 'views/Todo/redux/actions';

interface TodoCardProps {
  todo: ITask;
}
function TodoCard({ todo }: TodoCardProps) {
  const styles = useStyles(todo);
  const dispatch = useAppDispatch();
  const { removeTodo } = new TodoActions();

  return (
    <Card elevation={5} className={styles.root}>
      <CardHeader
        avatar={<Avatar className={styles.avatar}>{todo.title[0].toUpperCase()}</Avatar>}
        action={
          <IconButton
            className={styles.icon}
            aria-label="settings"
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            <DeleteOutlined />
          </IconButton>
        }
        title={todo.title}
      />
      <CardContent>
        <Typography className={styles.descr} color="textSecondary">
          {todo.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default TodoCard;
