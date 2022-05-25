import { Dispatch } from 'redux';

export  const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};

export const addTodo =(title:any)=>{
  return{
    type:'addTodo',
    payload: title
  }
}
export const removeTodo =(id:any)=>{
  return{
    type:'deleteTodo',
    payload: id
  }
}

export default class TodoActions {
  addTodo = (title: string) => {

  };

  removeTodo = (id: string) => {};
}
