const DeleteConfirmationModal = ({ onDeleteConfirmed, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#1B1A17] bg-opacity-80 flex justify-center items-center">
      <div className="bg-[#1F1E1B] p-8 rounded-sm  border-t-4 border-[#A35709]">
        {/* <p className="border-2 border-[#A35709]"></p> */}
        <p className="text-lg  text-white mb-4">Delete this task?</p>
        <div className="flex justify-center">
          <button
            className="p-2 text-xs text-white rounded-sm mr-4 w-11 border border-[#A35709]"
            onClick={onDeleteConfirmed}
          >
            Yes
          </button>
          <button
            className="p-2 text-xs text-white rounded-sm w-11 border border-[#A35709]"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
