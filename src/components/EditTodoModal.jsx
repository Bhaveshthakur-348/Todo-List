import { useState } from "react";

const EditTodoModal = ({ todo, onEditConfirmed, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedInput, setEditedInput] = useState(todo.input);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setEditedInput(e.target.value);
  };

  const handleEditConfirm = () => {
    const editedTodo = { ...todo, title: editedTitle, input: editedInput };
    onEditConfirmed(editedTodo);
  };

  return (
    <div className="fixed bottom-[0px] left-0 w-full h-full flex justify-center items-end bg-black bg-opacity-50">
      <div className="bg-[#1B1A17] p-6 rounded-md">
        <div className="mb-4">
          <input
            type="text"
            className="bg-[#1B1A17] text-white border-2 border-[#FF8303] rounded-md w-full px-3 py-1"
            value={editedTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="bg-[#1B1A17] text-white border-2 border-[#FF8303] rounded-md w-full px-3 py-1"
            value={editedInput}
            onChange={handleInputChange}
            rows="10"
            cols="50"
          />
        </div>

        <div className="flex justify-center">
          
          <button
            className="bg-[#1B1A17] text-white border border-[#FF8303] px-4 py-2 rounded-md mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-[#1B1A17] text-white border border-[#FF8303] px-4 py-2 rounded-md mr-2"
            onClick={handleEditConfirm}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
