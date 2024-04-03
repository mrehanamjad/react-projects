import { useState } from "react";


function App() {

  let [color,setColor]=useState("gray")

  return (
      <div className=" text-white h-screen w-full flex flex-col justify-evenly items-center duration-1000" style={{backgroundColor:color}}>


    <div className="bg-white min-h-20 min-w-3/4 rounded-full drop-shadow-2xl flex flex-wrap justify-center items-center gap-5 p-2">
      <button className="bg-red-700 p-7 rounded-full" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}></button>
      <button className="p-7 rounded-full"  style={{backgroundColor:"green"}} onClick={()=>setColor("green")}></button>
      <button className="p-7 rounded-full" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}></button>
      <button className="p-7 rounded-full" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}></button>
      <button className="p-7 rounded-full" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}></button>
      <button className="p-7 rounded-full" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"lime"}} onClick={()=>setColor("lime")}></button>
      <button className="p-7 rounded-full" style={{backgroundColor:"lightgrey"}} onClick={()=>setColor("lightgrey")}></button>
      <button className="p-7 rounded-full" style={{backgroundColor:"lightsalmon"}} onClick={()=>setColor("lightsalmon")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"aquamarine"}} onClick={()=>setColor("aquamarine")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"teal"}} onClick={()=>setColor("teal")}></button>
      <button className=" p-7 rounded-full" style={{backgroundColor:"lightskyblue"}} onClick={()=>setColor("lightskyblue")}></button>
    </div>
    <h1 className="font-bold text-5xl">BgColor Changer</h1>
      </div>
  );
}

export default App;
