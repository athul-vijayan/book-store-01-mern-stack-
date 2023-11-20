import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';
import Backbutton from '../components/home/Backbutton';
import axios from 'axios';

function DeleteBook() {
  const [loading, setLoading]=useState(false)
  const navigate= useNavigate();
  const {id}=useParams()

  const handleDeleteBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      alert('An Error Occured')
      console.log(error);
    })
  }



  return (
    <div>
      <Backbutton/>
      <h1>Delete Book</h1>
      {loading?<Spinner/>:''}
      <div>
        <h3>Are You Sure You Want to Delete this Book ?</h3>
        <button onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook