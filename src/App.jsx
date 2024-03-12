import { useState } from "react";
import DeleteConfirmationModal from "./components/ConfirmationModal";
import EditTodoModal from "./components/EditTodoModal"; // Importing EditTodoModal component
import editImage from "./assets/editImage.png";
import deleteImage from "./assets/deleteImage.png";
import infoImage from "./assets/infoImage.png";
import addImage from "./assets/addImage.png";
import Header from "./components/Header";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [showIcons, setShowIcons] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // State to control visibility of edit modal

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (title.trim() === "" || input.trim() === "") {
      alert("Please enter both title and input.");
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: title,
      input: input,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setInput("");
  };

  const handleDelete = (id) => {
    setSelectedTodoId(id);
    setShowDeleteConfirmation(true);
  };

  const handleEdit = (id) => {
    setSelectedTodoId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    const updatedData = todos.filter((todo) => todo.id !== selectedTodoId);
    setTodos(updatedData);
    setShowDeleteConfirmation(false);
    setSelectedTodoId(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setSelectedTodoId(null);
  };

  const handleEditConfirmed = (editedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    setSelectedTodoId(null);
  };

  return (
    <div className="bg-[#1F1E1B] w-full h-screen">
      {/* Header  */}
      <Header />

      {/* Body  */}
      <div className="flex justify-center p-4 gap-1">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Title..."
            className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-96"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Input..."
            className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-96"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center items-center  p-1 border-2 rounded-lg w-16 border-[#FF8303]">
          <button
            className="font-bold text-[30px] text-[#FF8303]"
            onClick={handleAddTodo}
          >
            +
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div className="lg:bg-[#242320] lg:border-2 border-[#FF8303] mt-4 mx-8 rounded-md h-96 flex flex-wrap justify-center items-center">
        {todos.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="border-2 w-8 border-[#FF8303]"></p>
            <p className="text-white font-bold py-2">No Task</p>
            <p className="border-2 w-8 border-[#FF8303]"></p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="p-3 m-2 w-56 border-2 border-[#FF8303] rounded-md text-white flex justify-between items-center relative"
            >
              <div>
                <p className="text-lg font-semibold">{todo.title}</p>
                <p className="text-xs">{todo.input}</p>
              </div>
              {showIcons ? (
                <div className="flex absolute right-2">
                  <img
                    src={editImage}
                    alt="edit"
                    className="mr-2 cursor-pointer"
                    onClick={() => handleEdit(todo.id)}
                  />

                  <img
                    src={deleteImage}
                    alt="delete"
                    onClick={() => handleDelete(todo.id)}
                    className="cursor-pointer"
                  />
                </div>
              ) : (
                <img
                  src={infoImage}
                  alt="info"
                  onClick={() => setShowIcons(true)}
                  className="cursor-pointer"
                />
              )}
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <DeleteConfirmationModal
          onDeleteConfirmed={handleDeleteConfirmed}
          onCancel={handleCancelDelete}
        />
      )}

      {/* Edit Todo Modal */}
      {showEditModal && (
        <EditTodoModal
          todo={todos.find(todo => todo.id === selectedTodoId)}
          onEditConfirmed={handleEditConfirmed}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default App;
