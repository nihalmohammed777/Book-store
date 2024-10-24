import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'

const ShowBooks = () => {
  const [book,setBook]=useState({})
  const [loading,setloading]=useState(false)
  const {id}=useParams()

  useEffect(()=>{
    setloading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
    setBook(response.data)
    setloading(false)
    })
    .catch((error)=>{
    console.log(error)
    setloading(false)
    })
  },[])

  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {
      loading?
      (<Spinner/>)
      :
      (<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
       <div className='my-4'>
      <span className='text-xl mr-4 text-gray-500'>ID</span> 
      <span>{book._id}</span>  
       </div>
       <div className='my-4'>
      <span className='text-xl mr-4 text-gray-500'>Title</span> 
      <span>{book.title}</span>  
       </div>
       <div className='my-4'>
      <span className='text-xl mr-4 text-gray-500'>Author</span> 
      <span>{book.author}</span>  
       </div>
       <div className='my-4'>
      <span className='text-xl mr-4 text-gray-500'>Publish Year</span> 
      <span>{book.publishYear}</span>  
       </div>
       <div className='my-4'>
      <span className='text-xl mr-4 text-gray-500'>Create Time</span> 
      <span>{new Date(book.createAt).toString()}</span>  
       </div>
       <div className='my-4'>
      <span className='text-xl mr-4 text-gray-500'>Last update Time</span> 
      <span>{new Date(book.updateAt).toString()}</span>  
       </div>
      </div>)
    }
    </div>
  )
}

export default ShowBooks