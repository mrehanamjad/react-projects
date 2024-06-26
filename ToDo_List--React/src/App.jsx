import { useState, useEffect } from "react";
import Task from "./components/Task";
import Add from "./components/Add";
function App() {
  const [themeBlack, setThemeBlack] = useState(true);
  const [showAddC, setShowAddC] = useState(false);
  const [tempId, setTempId] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("rtodoData")) || [];
    setTasks(users);
    users.length > 0 && setTempId(users[users.length - 1]?.id + 1);
  }, []);

  function addTask(e) {
    if (e.target.name === "add") {
      // taskC.push(tempId)
      // setTaskC(taskC);
      //or:
      let inputContent = e.target.parentElement.previousSibling.value;
      setTasks([...tasks, { id: tempId, content: inputContent }]);
      setTempId(tempId + 1);
    }
    setShowAddC(false);
  }

  function deleteTask(e) {
    let taskVal = e.target.parentElement.firstElementChild.nextSibling.value;
    let notDeletedTasks = [];
    tasks.map((task) => taskVal !== task.content && notDeletedTasks.push(task));
    if (deleteTask.length > 1) {
      setTasks(notDeletedTasks);
    } else {
      setTasks(notDeletedTasks);
      localStorage.removeItem("rtodoData");
    }
  }

  function completeTask() {
    // let taskVal = e.target.parentElement.firstElementChild.nextSibling.value;
    console.log("yes i am running......");
  }

  useEffect(() => {
    tasks.length > 0 &&
      localStorage.setItem("rtodoData", JSON.stringify(tasks));
  }, [tasks]); // AS setTasks useState is asynchronous so this ensures that when task updated then add to loacl storage

  return (
    <div
      className={`h-screen w-full overflow-x-hidden overflow-auto relative ${
        themeBlack ? "bg-[#252525]" : " bg-[#f5f5f5]"
      }`}
    >
      <div
        className={`sticky top-0 h-1/6 w-screen bg-  flex flex-col items-center justify-evenly ${
          themeBlack ? "text-white bg-[#252525]" : "text-black bg-[#f5f5f5]"
        }`}
      >
        <h1 className="text-2xl font-extrabold">TODO LIST</h1>
        <div className="gap-2 sm:gap-4 font-semibold flex flex-col sm:flex-row flex-wrap items-center">
          <div className="relative">
            <img
              src="images/searchIcon.svg"
              alt=""
              className={`absolute left-2 top-2 filter brightness-0 ${
                themeBlack ? "invert" : ""
              }`}
            />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Task.."
              className="py-1 text-lg px-2  pl-9 w-80 md:w-[400px] bg-transparent border-2 border-cyan-500 focus:border-cyan-600 outline-none rounded "
            />
          </div>
          <div className="flex gap-4">
            <select
              name=""
              id=""
              className="py-1 text-lg px-2 bg-cyan-600 outline-none rounded text-white border-2 border-cyan-600 cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
            <img
              src={themeBlack ? "images/lightMode.svg" : "images/darkMode.svg"}
              alt="switch mode btn"
              className="py-1 text-lg px-2 bg-cyan-600 outline-none rounded border-2 border-cyan-600 cursor-pointer"
              onClick={() =>
                themeBlack ? setThemeBlack(false) : setThemeBlack(true)
              }
            />
          </div>
        </div>
      </div>
      <div
        className={`py-4 flex flex-col items-center  ${
          themeBlack ? "text-white" : "text-black"
        } space-x-2 gap-4`}
      >
        <img
          src="images/Vector-4.svg"
          alt="Add Task button"
          className="bg-cyan-600 p-4 rounded-full fixed bottom-12 xl:left-2/3 left-3/4 cursor-pointer hover:scale-110"
          onClick={() => setShowAddC(true)}
        />
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            themeBlack={themeBlack}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      {showAddC && (
        <Add
          themeBlack={themeBlack}
          addTask={addTask}
          completeTask={completeTask}
        />
      )}
    </div>
  );
}

export default App;

// vector-6
// vector-2
