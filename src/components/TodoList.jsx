import TodoListItem from './TodoListItem';

const TodoList = ({ todos, selectedTodoId, onDelete, onEdit, onShowIcons }) => (
  <div className="lg:bg-[#242320] lg:border-2 border-[#FF8303] mt-4 mx-8 rounded-md lg:h-96 sm:h-[12rem] flex flex-wrap justify-center items-center">
    {todos.length === 0 ? (
      <div className="flex flex-col items-center">
        <p className="border-2 w-8 border-[#FF8303]"></p>
        <p className="text-white font-bold py-2">No Task</p>
        <p className="border-2 w-8 border-[#FF8303]"></p>
      </div>
    ) : (
      todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          selectedTodoId={selectedTodoId}
          onDelete={onDelete}
          onEdit={onEdit}
          onShowIcons={onShowIcons}
        />
      ))
    )}
  </div>
);

export default TodoList;
