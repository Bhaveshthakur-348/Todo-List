import editImage from "../assets/editImage.png";
import deleteImage from "../assets/deleteImage.png";
import infoImage from "../assets/infoImage.png";

const TodoListItem = ({ todo, selectedTodoId, onDelete, onEdit, onShowIcons }) => (
  <div
    className="p-3 m-2 w-56 border-2 border-[#FF8303] rounded-md text-white flex justify-between items-center relative"
  >
    <div>
      <p className="text-lg font-semibold">
        {todo.title.length > 10 ? todo.input.slice(0, 10) + '...' : todo.title}
      </p>
      <p className="text-xs">
        {todo.input.length > 16 ? todo.input.slice(0, 16) + '...' : todo.input}
      </p>
    </div>
    {selectedTodoId === todo.id ? (
      <div className="flex absolute right-2">
        <img
          src={editImage}
          alt="edit"
          className="mr-2 cursor-pointer"
          onClick={() => onEdit(todo.id)}
        />
        <img
          src={deleteImage}
          alt="delete"
          onClick={() => onDelete(todo.id)}
          className="cursor-pointer"
        />
      </div>
    ) : (
      <img
        src={infoImage}
        alt="info"
        onClick={() => onShowIcons(todo.id)}
        className="cursor-pointer"
      />
    )}
  </div>
);

export default TodoListItem;
