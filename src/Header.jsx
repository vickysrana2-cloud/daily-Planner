import React from 'react'
import { MdEditSquare } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import logo from "./assets/myPlanLogo_darkpink.svg"
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-between px-30  bg-pink-500'>
        <img src={logo} alt="..."/>
        <p className='text-center my-auto  w-30' >
            <button className=' shadow-2xl/55 shadow-red-700 bg-pink-400 rounded-2xl p-1.5 duration-300 hover:shadow' onClick={()=>{navigate("/")}}><MdEditSquare className='text-pink-200 text-2xl'/></button>
            <button className='ms-10 shadow-2xl/55 shadow-red-700 bg-pink-400 rounded-2xl p-1.5 duration-300 hover:shadow' onClick={()=>{navigate("/displayShell")}}><MdOutlineMenuBook className='text-2xl text-pink-200'/></button>
        </p>
    </div> 
  )
}

export default Header; 