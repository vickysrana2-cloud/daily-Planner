import { IoMdAdd } from "react-icons/io";
import axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router"



const UpdateShell = () => {
  const { id } = useParams();
  // console.log(id)

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const [disableBtn, setDisableBtn]=useState(false)



  const handleTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  }

  const handleDate = (e) => {
    // console.log(e.target.value)
    setDate(e.target.value);
  }

  const handleMessage = (e) => {
    // console.log(e.target.value);
    setMessage(e.target.value);
  }


  useEffect(() => {
    async function getDataBack() {
      try {
        const response = await axios.get("https://6880ec39f1dcae717b63fca1.mockapi.io/users/" + id);
        // console.log(response)
        setTitle(response.data.title)
        setDate(response.data.date)
        setMessage(response.data.message)

        // console.log(response.data.title)
        // console.log(response.data.date)
        // console.log(response.data.message)
      } catch (error) {
        console.log(error)
      }
    }
    getDataBack();

  }, [])


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = {
        title: title,
        date: date,
        message: message
      }
      const response = await axios.put("https://6880ec39f1dcae717b63fca1.mockapi.io/users/" + id, userData);
      // console.log(response)
      setDisableBtn(true);
      navigate("/displayShell")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='max-w-80 rounded-2xl bg-pink-400 mx-auto my-28 p-5  shadow-xl/50  shadow-pink-600'>
      <h1 className='text-center font-bold text-3xl my-5 text-pink-800'>Update Task of {date}</h1>
      <form className="flex flex-col mt-5" action="" onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='Title' className='shadow-inner shadow-pink-600 rounded-3xl px-3 py-2 mt-7 text-pink-800' onChange={handleTitle} />
        <input type="date" value={date} className='shadow-inner shadow-pink-600 rounded-3xl px-3 py-2 mt-7 text-pink-800' onChange={handleDate} />
        <textarea name="discription" value={message} id="textareaId" className='shadow-inner shadow-pink-600 rounded-2xl mt-7 text-pink-800 px-3 py-3' onChange={handleMessage}></textarea>
        { disableBtn ? <button className='shadow-lg/55 shadow-pink-600 rounded-3xl mt-7 p-1 duration-300 hover:shadow text-pink-800' disabled><IoMdAdd className='text-2xl mx-auto' /></button>:<button className='shadow-lg/55 shadow-pink-600 rounded-3xl mt-7 p-1 duration-300 hover:shadow text-pink-800'><IoMdAdd className='text-2xl mx-auto' /></button>}
      </form>
    </div>
  )
}

export default UpdateShell;