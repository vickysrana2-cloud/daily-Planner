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
  const [disableBtn, setDisableBtn] = useState(false)



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

    if (disableBtn) return;  // it ignore if already disabled
    setDisableBtn(true)     // It will disable and stoped if user already submited the form .

    e.preventDefault();

    if (title.trim() == "") {
      alert("Oops.. Title is blank ")
      return;       // It is Not allowing the Submition If the Title field is try to submit only white Spaces .
    }
    if (message.trim() == "") {
      alert("Please write Your Today's Task")
      return;     // It is Not allowing the Submition If the message field is try to submit only white Spaces .
    }

    try {
      const userData = {
        title: title,
        date: date,
        message: message
      }
      const response = await axios.put("https://6880ec39f1dcae717b63fca1.mockapi.io/users/" + id, userData);
      // console.log(response)
      navigate("/displayShell")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='max-w-80 rounded-2xl bg-pink-400 mx-auto my-28 p-5  shadow-xl/50  shadow-pink-600'>
      <h1 className='text-center font-bold text-3xl my-5 text-pink-800'>Update Task of {date}</h1>
      <form className="flex flex-col mt-5" action="" onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='Title' className='shadow-inner shadow-pink-600 rounded-3xl px-3.5 py-2 mt-7 text-pink-800' onChange={handleTitle} required />
        <input type="date" value={date} className='shadow-inner shadow-pink-600 rounded-3xl px-3.5 py-2 mt-7 text-pink-800' onChange={handleDate} required />
        <textarea name="discription" value={message} id="textareaId" className='shadow-inner shadow-pink-600 rounded-2xl mt-7 text-pink-800 p-3' onChange={handleMessage} required></textarea>
        <button className='shadow-lg/55 border border-pink-500 shadow-pink-600 rounded-3xl mt-7 p-1 duration-300 hover:shadow text-pink-800   disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none ' disabled={disableBtn}><IoMdAdd className='text-2xl mx-auto' /></button>
      </form>
    </div>
  )
}

export default UpdateShell;