import TodoCard from 'views/Todo/components/TodoCard/TodoCard';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useStyles } from './styles';
import { ITask } from 'interfaces/ITask';
import { Container } from '@material-ui/core';

const TodoList = () => {
  const styles = useStyles();
  const { todos } = useAppSelector(state => state.todo.current);
  return (
    <>
      <Container>
        {todos?.map((todo: ITask) => {
          return <TodoCard todo={todo} />;
        })}
      </Container>
    </>
  );
};

export default TodoList;
