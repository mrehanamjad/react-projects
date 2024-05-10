import React, { useState, useEffect } from "react";
import { useLoaderData  } from "react-router-dom";

function Github() {
  // const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/mrehanamjad")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

const data = useLoaderData();

  return (
  <div className="h-full w-full py-16 px-6 flex space-x-10">
    <img className="rounded-xl h-72" src={data.avatar_url} alt="Github profile pic" />
    <div className="flex flex-col text-left gap-2">
        <h1 className="font-bold text-xl">{data.name}</h1>
        <p>{data.login}</p>
        <p>{data.bio}</p>
        <div className="flex  items-center justify-evenly py-4">
            <div className="w-40 p-0.5 rounded bg-black text-center">
                <p className="bg-orange-600 p-4 ">Repositories</p>
                <p className="bg-orange-300 p-4 ">{data.public_repos}</p>
            </div>
            <div className="w-40 p-0.5 rounded bg-black text-center">
                <p className="bg-orange-600 p-4 ">Followers</p>
                <p className="bg-orange-300 p-4 ">{data.followers}</p>
            </div>
            <div className="w-40 p-0.5 rounded bg-black text-center">
                <p className="bg-orange-600 p-4 ">Following</p>
                <p className="bg-orange-300 p-4 ">{data.following}</p>
            </div>
        </div>
        <a href={data.html_url} target="_blank">
        <button className="py-4 bg-orange-700/85 text-white rounded-2xl w-full">View Github</button>
        </a>
    </div>
  </div>
);
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/mrehanamjad")
    return response.json()
}