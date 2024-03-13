import { useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

// Lazily import components
const DeleteConfirmationModal = lazy(() => import("./components/ConfirmationModal"));
const EditTodoModal = lazy(() => import("./components/EditTodoModal"));

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [showIcons, setShowIcons] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    setSelectedTodoId(null);
  };

  const handleShowIcons = (id) => {
    setSelectedTodoId(id);
    setShowIcons(true);
  };

  return (
    <div className="bg-[#1F1E1B] w-full h-screen">
      <Header />
      
      <div className="flex justify-center p-4 gap-1">
        <InputForm
          title={title}
          input={input}
          onTitleChange={handleTitleChange}
          onInputChange={handleInputChange}
          onAddTodo={handleAddTodo}
        />
      </div>

      <TodoList
        todos={todos}
        selectedTodoId={selectedTodoId}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onShowIcons={handleShowIcons}
      />

      <Suspense fallback={<div>Loading...</div>}>
        {showDeleteConfirmation && (
          <DeleteConfirmationModal
            onDeleteConfirmed={handleDeleteConfirmed}
            onCancel={handleCancelDelete}
          />
        )}

        {showEditModal && (
          <EditTodoModal
            todo={todos.find((todo) => todo.id === selectedTodoId)}
            onEditConfirmed={handleEditConfirmed}
            onCancel={handleCancelEdit}
          />
        )}
      </Suspense>
    </div>
  );
};

export default App;
