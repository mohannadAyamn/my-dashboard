function filterTodosByStatus(todos, status) {
  return todos.filter((todo) => todo.status === status);
}

export default filterTodosByStatus;
