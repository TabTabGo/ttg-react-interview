import TodoCard from 'views/Todo/components/TodoCard/TodoCard';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useStyles } from './styles';
import { ITask } from 'interfaces/ITask';
import { Container } from '@material-ui/core';
import Masonry from 'react-masonry-css';

const TodoList = () => {
  const styles = useStyles();
  const { todos } = useAppSelector(state => state.todo.current);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {todos.map((todo: ITask) => (
          <div key={todo.id}>
            <TodoCard todo={todo} />
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default TodoList;
