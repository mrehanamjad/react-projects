import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [])

  

  return (
    <>
      <div className="h-32 min-w-80 mx-auto flex justify-center items-center">
        <div className="relative">
          <input
            type="text"
            className="text-lg py-2 min-w-96 px-4 rounded-3xl outline-none  pl-14 drop-shadow-2xl" 
            placeholder="Search here.."
          />
          <i className="text-3xl font-bold absolute left-1 top-1">🔍</i>
        </div>
      </div>
      <div className="w-full py-10  flex flex-wrap gap-8 items-center justify-center">
        {users.map((user) => {
          return <div key={user.id} className="card min-h-80 w-60 bg-[#9DB2BF] rounded-xl py-2 flex flex-col gap-3 duration-500 hover:-translate-y-3 drop-shadow-lg">
            <img
              src={user.avatar_url}
              alt="avitar or profile image"
              className="h-3/4 w-11/12 m-auto rounded-xl"
            />
            <h2 className="text-xl font-bold m-auto">{user.login}</h2>
            <a href={user.html_url} target="_blank" className="m-auto">
              <button className="bg-[#526D82] py-1 px-3 text-lg rounded-lg ">
                View Profile →
              </button>
            </a>
          </div>;
        })}
      </div>
    </>
  );
}

export default App;
