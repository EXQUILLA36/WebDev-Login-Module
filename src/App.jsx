import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainBox relative w-[25vw] max-sm:w-[70vw] h-[45vh] max-sm:h-[50vh] rounded-[15px] border-2 flex flex-col items-center gap-3 pt-7 backdrop-blur-sm">
        <div className='relative font-[900] mb-2.5'><h1 >Login</h1></div>
      <div className='w-[85%] h-[80%]'>
        <form action="submit" className="flex flex-col justify-around items-center h-full">
          <input type="text" name="name" id="name" placeholder='Full Name' />
          <input type="password" name="passw" id="mail" placeholder='Password' />
          <div className='flex felx-row justify-between w-full gap-2'>
            <div className="w-[50%]"><input type="checkbox" name='tnc' id='tnc' className='w-[12%] ' /> <label htmlFor="tnc">Remember Me</label></div>
            <a href="" className=" text-white ">Forgot Password?</a>
          </div>
          <button className='w-full h-[20%] rounded-xl'>SIGN IN</button>
        </form>
      </div>
      </div>    
    </>
  );
}

export default App;
