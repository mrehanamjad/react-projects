// import React, { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [inputS, setInputS] = useState("")
//   const [showOnSearch, setShowOnSearch] = useState("")

//   useEffect(() => {
//     fetch("https://api.github.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [])

//     function getI(e){
//       setInputS(e.target.value)
//     }
  

//   return (
//     <>
//       <div className="h-32 min-w-80 mx-auto flex justify-center items-center">
//         <div className="relative">
//           <input
//             type="text"
//             className="text-lg py-2 min-w-96 px-4 rounded-3xl outline-none  pl-14 drop-shadow-2xl" 
//             placeholder="Search here.."
//             onKeyUp={getI}
//           />
//           <i className="text-3xl font-bold absolute left-1 top-1">🔍</i>
//         </div>
//       </div>
//       <div className="w-full py-10  flex flex-wrap gap-8 items-center justify-center">
//         {users.map((user) => {
//           useEffect(() => {
//             user.login.includes(inputS) ? setShowOnSearch("") : setShowOnSearch("none");
//           }, [inputS])
          
//           return <div key={user.id} className="card min-h-80 w-60 bg-[#9DB2BF] rounded-xl py-2 flex flex-col gap-3 duration-500 hover:-translate-y-3 drop-shadow-lg"  style={{display:showOnSearch}}>
//             <img
//               src={user.avatar_url}
//               alt="avitar or profile image"
//               className="h-3/4 w-11/12 m-auto rounded-xl"
//             />
//             <h2 className="text-xl font-bold m-auto">{user.login}</h2>
//             <a href={user.html_url} target="_blank" className="m-auto">
//               <button className="bg-[#526D82] py-1 px-3 text-lg rounded-lg ">
//                 View Profile →
//               </button>
//             </a>
//           </div>;
//         })}
//       </div>
//     </>
//   );
// }

// export default App;

// main problem in above code and its solution:

// Problem:
// Inside the users.map() function, you're calling the useEffect hook for every user in the users array. This is not the intended 
// use of useEffect. useEffect is meant to be called at the top level of your component or inside custom hooks, not within loops or conditions.

// Solution:
// Instead of using useEffect inside users.map(), you should directly set the showOnSearch state based on whether the user's login 
// includes the search input or not. You don't need useEffect for this purpose.

//Here's the corrected version of your code:

// import React, { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     fetch("https://api.github.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   return (
//     <>
//       <div className="h-32 min-w-80 mx-auto flex justify-center items-center">
//         <div className="relative">
//           <input
//             type="text"
//             className="text-lg py-2 min-w-96 px-4 rounded-3xl outline-none  pl-14 drop-shadow-2xl"
//             placeholder="Search here.."
//             value={inputValue}
//             onChange={handleInputChange}
//           />
//           <i className="text-3xl font-bold absolute left-1 top-1">🔍</i>
//         </div>
//       </div>
//       <div className="w-full py-10  flex flex-wrap gap-8 items-center justify-center">
//         {users.map((user) => (
//           <div
//             key={user.id}
//             className="card min-h-80 w-60 bg-[#9DB2BF] rounded-xl py-2 flex flex-col gap-3 duration-500 hover:-translate-y-3 drop-shadow-lg"
//             style={{ display: user.login.includes(inputValue) ? "block" : "none" }}
//           >
//             <img
//               src={user.avatar_url}
//               alt="avatar or profile image"
//               className="h-3/4 w-11/12 m-auto rounded-xl"
//             />
//             <h2 className="text-xl font-bold m-auto">{user.login}</h2>
//             <a
//               href={user.html_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="m-auto"
//             >
//               <button className="bg-[#526D82] py-1 px-3 text-lg rounded-lg">
//                 View Profile →
//               </button>
//             </a>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;




// approack 2 :

import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.login.includes(inputValue)));
  }, [inputValue, users]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="h-32 min-w-80 mx-auto flex justify-center items-center">
        <div className="relative">
          <input
            type="text"
            className="text-lg py-2 min-w-96 px-4 rounded-3xl outline-none  pl-14 drop-shadow-2xl" 
            placeholder="Search here.."
            value={inputValue}
            onChange={handleInputChange}
          />
          <i className="text-3xl font-bold absolute left-1 top-1">🔍</i>
        </div>
      </div>
      <div className="w-full py-10  flex flex-wrap gap-8 items-center justify-center">
        {filteredUsers.map((user) => (
          <div key={user.id} className="card min-h-80 w-60 bg-[#9DB2BF] rounded-xl py-2 flex flex-col gap-3 duration-500 hover:-translate-y-3 drop-shadow-lg">
            <img
              src={user.avatar_url}
              alt="avatar or profile image"
              className="h-3/4 w-11/12 m-auto rounded-xl"
            />
            <h2 className="text-xl font-bold m-auto">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="m-auto">
              <button className="bg-[#526D82] py-1 px-3 text-lg rounded-lg">
                View Profile →
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
