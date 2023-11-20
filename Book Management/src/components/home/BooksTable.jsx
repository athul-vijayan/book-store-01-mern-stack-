import React from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'




const BooksTable = ({books}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publish Year</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>

{
    books.map((book, index)=>{
        return (
            <tr key={index}>
            <td>{index+1}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publishYear}</td>
            <td>
            <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
                </td> 
            </tr>
            
        )
    }
    )
    }


    </tbody>


    </table>
  )
}

export default BooksTable