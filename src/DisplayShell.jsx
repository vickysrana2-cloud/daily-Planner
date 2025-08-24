import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router';

const DisplayShell = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [updatedMoke, setUpdatedMoke] = useState([]);
  const [shimmarEft , setShimmarEft]=useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://6880ec39f1dcae717b63fca1.mockapi.io/users");
        setUserData(response.data);
        // console.log(response.data);
        setShimmarEft(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [updatedMoke])
  // console.log(userData);

  if(shimmarEft){
    return <h1 className='text-3xl font-bold my-64 text-center text-pink-700'>Loading....</h1>
  }

  async function handleDelet(id) {
    try {
      const response = await axios.delete("https://6880ec39f1dcae717b63fca1.mockapi.io/users/" + id)
      // console.log(response)
      setUpdatedMoke(response);
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className='flex flex-wrap gap-5 gap-y-10 px-40 py-20 justify-evenly '>
      {
        userData.length == 0 ? <button onClick={()=>navigate("/")} className='shadow-lg/55 shadow-pink-800 bg-pink-300 rounded-3xl mt-40 px-5 py-3 transition-all duration-300 hover:shadow text-pink-800 hover:text-white'>Add New Task</button>
          :
          userData.map((data) => {
            const { id, date, message, title } = data;
            // console.log(id, date, message, title)
            return (
              <div key={id} className='transition-all duration-300 shadow-xl/50 hover:shadow-inner hover:shadow-xl/85 hover:-translate-y-2  shadow-pink-700 bg-pink-400 w-60 min-h-50 break-words p-5 flex flex-col justify-around rounded-3xl'>
                <p className='text-end mb-1 text-pink-900'>{date}</p>
                <h3 className='font-bold text-xl px-2 mb-2 text-pink-800'>{title}</h3>
                <p className='text-pink-950 px-2'>{message}</p>
                <div className='text-end mt-4'>
                  <button onClick={() => { navigate(`/updateShell/${id}`) }} className='rounded-xl p-2 bg-violet-800 duration-300 hover:scale-110 shadow-lg/50 hover:shadow'><GrEdit className='text-white' /></button>
                  <button onClick={() => { handleDelet(id) }} className='ms-6 rounded-xl p-2 bg-violet-800 duration-300 hover:scale-110 shadow-lg/50 hover:shadow'><RiDeleteBin6Line className='text-white' /></button>
                </div>
              </div>
            )
          })
      }

    </div>
  )
}

export default DisplayShell;