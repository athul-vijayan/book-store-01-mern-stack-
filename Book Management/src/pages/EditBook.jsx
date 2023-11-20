import React, { useState } from 'react'
import Backbutton from '../components/home/Backbutton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function EditBook() {

  const[loading, setLoading]=useState(false)
  const [title, setTitle]=useState('')
  const [author, setAuthor]=useState('')
  const [publishYear, setPublishYear]=useState('')
  const {id}=useParams()
  const navigate=useNavigate()

  const handleEdit=()=>{
    const data={title, author, publishYear}
    setLoading(true)
    axios.put(`http://localhost:5555/books/${id}`, data).then(()=>{
      setLoading(false)
      navigate('/')
      }
    ).catch((error)=>{
      setLoading(false)
      alert('error')
      console.log(error);
    })
  }
  
  return (
    <div>
      <Backbutton/>
      <h1>Edit Book</h1>
      {loading?<Spinner/>:''}

      <div>
        <div>
          <label htmlFor="">Title</label>
          <input className='border-2 border-gray-500 px-4 py-2 w-full'  type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
          <label htmlFor="">Author</label>
          <input  className='border-2 border-gray-500 px-4 py-2 w-full' type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
          <label htmlFor="">Publish Year</label>
          <input className='border-2 border-gray-500 px-4 py-2 w-full'  type="text" value={publishYear} onChange={e=>setPublishYear(e.target.value)}/>
          <button onClick={handleEdit}>Change</button>
        </div>
      </div>
    </div>
  )
}

export default EditBook