import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {useSnackbar} from 'notistack'
import Backbutton from "../components/home/Backbutton";

function CreateBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const {enqueueSnackbar}=useSnackbar()

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        // enqueueSnackbar('Book Created Successfully', {variant: 'success'})
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // enqueueSnackbar(`Error, ${error}`, {variant:'error'})
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <Backbutton/>
      <h1>Create Book</h1>
      <div>
        <div>
          <label className='text-xl mr-4 text-gray-500' htmlFor="">Title</label>
          <input
            type="text"
            className='border-2 border-gray-500 px-4 py-2 w-full'
            
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className='text-xl mr-4 text-gray-500' htmlFor="">Author</label>
          <input
            type="text"
            className='border-2 border-gray-500 px-4 py-2 w-full'
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            name=""
            id=""
          />
        </div>
        <div>
          <label className='text-xl mr-4 text-gray-500' htmlFor="">Publish Year</label>
          <input
            type="text"
            className='border-2 border-gray-500 px-4 py-2 w-full'
            onChange={(e) => setPublishYear(e.target.value)}
            value={publishYear}
            name=""
            id=""
          />
        </div>
        <button onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  );
}

export default CreateBooks;
