import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'
import {useSnackbar} from 'notistack'

const DeleteBooks = () => {
  const [loading,setloading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  const {enqueueSnackbar}=useSnackbar();

  const handeldeletebook=()=>{
    setloading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setloading(false)
      enqueueSnackbar('Book Deleted Sucessfully',{varient:'success'})
      navigate('/')
    })
    .catch((error)=>{
     setloading(false)
    //  alert(`an error happend`)
    enqueueSnackbar("error",{varient:'error'})
     console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>:""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure u want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handeldeletebook}>
          Yes delete it
        </button>

      </div>
    </div>
  )
}

export default DeleteBooks