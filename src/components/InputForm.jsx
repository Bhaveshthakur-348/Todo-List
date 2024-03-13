import addImage from "../assets/addImage.png";

const InputForm = ({ title, input, onTitleChange, onInputChange, onAddTodo }) => (
  <>
    <div className="flex flex-col gap-1">
      <input
        type="text"
        placeholder="Title..."
        className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-72 focus:outline-none focus:border-[#FF8303]"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        placeholder="Input..."
        className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-72 focus:outline-none focus:border-[#FF8303]"
        value={input}
        onChange={onInputChange}
      />
    </div>
    <img src={addImage} alt="add" onClick={onAddTodo} />
  </>
);

export default InputForm;
