# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


  {/* <div className="border-2 w-8 h-8 text-center border-[#FF8303] text-[#FF8303] rounded-md cursor-pointer"
                    onClick={() => handleDelete(todo.id)}
                  >
                    x
                  </div> */}

                  // <div
                //   className="border-2 w-8 h-8 text-center border-[#FF8303] rounded-md cursor-pointer"
                //   onClick={() => setShowIcons(true)}
                // >
                //   i
                // </div>


          <img src={addImage} alt="add" className="cursor-pointer" onClick={handleAddTodo} />



<!-- good code  -->

// import { useState } from "react";
// import DeleteConfirmationModal from "./components/ConfirmationModal";
// import editImage from "./assets/editImage.png";
// import deleteImage from "./assets/deleteImage.png";
// import infoImage from "./assets/infoImage.png";
// import addImage from "./assets/addImage.png"

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [input, setInput] = useState("");
//   const [showIcons, setShowIcons] = useState(false);
//   const [selectedTodoId, setSelectedTodoId] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (title.trim() === "" || input.trim() === "") {
//       alert("Please enter both title and input.");
//       return;
//     }

//     const newTodo = {
//       id: todos.length + 1,
//       title: title,
//       input: input,
//     };

//     setTodos([...todos, newTodo]);
//     setTitle("");
//     setInput("");
//   };

//   const handleDelete = (id) => {
//     setSelectedTodoId(id);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirmed = () => {
//     const updatedData = todos.filter((todo) => todo.id !== selectedTodoId);
//     setTodos(updatedData);
//     setShowDeleteConfirmation(false);
//     setSelectedTodoId(null);
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setSelectedTodoId(null);
//   };

//   return (
//     <div className="bg-[#1F1E1B] w-full h-screen">
//       {/* Header  */}
//       <header className="border-2 border-[#FF8303] h-16 rounded-md text-white">
//         <div className="p-1 ml-5 mt-1">
//           <p className="font-bold">GYIZER</p>
//           <p className="text-xs">TODO APP</p>
//         </div>
//       </header>

//       {/* Body  */}
//       <div className="flex justify-center p-4 gap-1">
//         <div className="flex flex-col gap-1">
//           <input
//             type="text"
//             placeholder="Title..."
//             className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-96"
//             value={title}
//             onChange={handleTitleChange}
//           />
//           <input
//             type="text"
//             placeholder="Input..."
//             className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-96"
//             value={input}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="flex justify-center items-center  p-1 border-2 rounded-lg w-16 border-[#FF8303]">
//           <button
//             className="font-bold text-[30px] text-[#FF8303]"
//             onClick={handleAddTodo}
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Todo List */}
//       <div className="bg-[#242320] border-2 border-[#FF8303] mt-4 mx-8 rounded-md h-96 flex flex-wrap justify-center items-center">
//         {todos.length === 0 ? (
//           <div className="flex flex-col items-center">
//             <p className="border-2 w-8 border-[#FF8303]"></p>
//             <p className="text-white font-bold py-2">No Task</p>
//             <p className="border-2 w-8 border-[#FF8303]"></p>
//           </div>
//         ) : (
//           todos.map((todo) => (
//             <div
//               key={todo.id}
//               className="p-3 m-2 w-56 border-2 border-[#FF8303] rounded-md text-white flex justify-between items-center relative"
//             >
//               <div>
//                 <p>{todo.title}</p>
//                 <p className="text-xs">{todo.input}</p>
//               </div>
//               {showIcons ? (
//                 <div className="flex absolute right-2">
//                   <img
//                     src={editImage}
//                     alt="edit"
//                     className="mr-2 cursor-pointer"
//                   />

//                   <img
//                     src={deleteImage}
//                     alt="delete"
//                     onClick={() => handleDelete(todo.id)}
//                     className="cursor-pointer"
//                   />
//                 </div>
//               ) : (
//                 <img
//                   src={infoImage}
//                   alt="info"
//                   onClick={() => setShowIcons(true)}
//                   className="cursor-pointer"
//                 />
//               )}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationModal
//           onDeleteConfirmed={handleDeleteConfirmed}
//           onCancel={handleCancelDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default App;




// import { useState } from "react";
// import DeleteConfirmationModal from "./components/ConfirmationModal";
// import editImage from "./assets/editImage.png";
// import deleteImage from "./assets/deleteImage.png";
// import infoImage from "./assets/infoImage.png";
// import addImage from "./assets/addImage.png"

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [title, setTitle] = useState("");
//   const [input, setInput] = useState("");
//   const [showIcons, setShowIcons] = useState(false);
//   const [selectedTodoId, setSelectedTodoId] = useState(null);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (title.trim() === "" || input.trim() === "") {
//       alert("Please enter both title and input.");
//       return;
//     }

//     const newTodo = {
//       id: todos.length + 1,
//       title: title,
//       input: input,
//     };

//     setTodos([...todos, newTodo]);
//     setTitle("");
//     setInput("");
//   };

//   const handleDelete = (id) => {
//     setSelectedTodoId(id);
//     setShowDeleteConfirmation(true);
//   };

//   const handleDeleteConfirmed = () => {
//     const updatedData = todos.filter((todo) => todo.id !== selectedTodoId);
//     setTodos(updatedData);
//     setShowDeleteConfirmation(false);
//     setSelectedTodoId(null);
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setSelectedTodoId(null);
//   };

//   return (
//     <div className="bg-[#1F1E1B] w-full h-screen">
//       {/* Header  */}
//       <header className="border-2 border-[#FF8303] h-16 rounded-md text-white">
//         <div className="p-1 ml-5 mt-1">
//           <p className="font-bold">GYIZER</p>
//           <p className="text-xs">TODO APP</p>
//         </div>
//       </header>

//       {/* Body  */}
//       <div className="flex justify-center p-4 gap-1">
//         <div className="flex flex-col gap-1">
//           <input
//             type="text"
//             placeholder="Title..."
//             className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-96"
//             value={title}
//             onChange={handleTitleChange}
//           />
//           <input
//             type="text"
//             placeholder="Input..."
//             className="text-white border-2 border-[#FF8303] bg-[#242320] p-1 rounded-md w-96"
//             value={input}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="flex justify-center items-center  p-1 border-2 rounded-lg w-16 border-[#FF8303]">
//           <button
//             className="font-bold text-[30px] text-[#FF8303]"
//             onClick={handleAddTodo}
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Todo List */}
//       <div className="bg-[#242320] border-2 border-[#FF8303] mt-4 mx-8 rounded-md h-96 flex flex-wrap justify-center items-center">
//         {todos.length === 0 ? (
//           <div className="flex flex-col items-center">
//             <p className="border-2 w-8 border-[#FF8303]"></p>
//             <p className="text-white font-bold py-2">No Task</p>
//             <p className="border-2 w-8 border-[#FF8303]"></p>
//           </div>
//         ) : (
//           todos.map((todo) => (
//             <div
//               key={todo.id}
//               className="p-3 m-2 w-56 border-2 border-[#FF8303] rounded-md text-white flex justify-between items-center relative"
//             >
//               <div>
//                 <p>{todo.title}</p>
//                 <p className="text-xs">{todo.input}</p>
//               </div>
//               {showIcons ? (
//                 <div className="flex absolute right-2">
//                   <img
//                     src={editImage}
//                     alt="edit"
//                     className="mr-2 cursor-pointer"
//                   />

//                   <img
//                     src={deleteImage}
//                     alt="delete"
//                     onClick={() => handleDelete(todo.id)}
//                     className="cursor-pointer"
//                   />
//                 </div>
//               ) : (
//                 <img
//                   src={infoImage}
//                   alt="info"
//                   onClick={() => setShowIcons(true)}
//                   className="cursor-pointer"
//                 />
//               )}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirmation && (
//         <DeleteConfirmationModal
//           onDeleteConfirmed={handleDeleteConfirmed}
//           onCancel={handleCancelDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default App;