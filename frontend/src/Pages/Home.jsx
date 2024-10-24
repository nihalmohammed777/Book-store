import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import axios from 'axios'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import {BsInfoCircle} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import Bookstable from '../components/home/Bookstable'
import Bookscard from '../components/home/Bookscard'

const Home = () => {

  const [books,setbooks]=useState([])
  const [loading,setloading]=useState(false)
  const [showtype,setshowtype]=useState('table')

useEffect(()=>{
  setloading(true)
  axios.get('http://localhost:5555/books')
  .then((response)=>{
    console.log(response);
   setbooks(response.data.data)
   setloading(false)
  })
  .catch((error)=>{
   console.log(error)
   setloading(false)
  })

},[])

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={()=>setshowtype('table')}>
          Table
        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={()=>setshowtype('card')}>
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to={'/book/create'}><MdOutlineAddBox className='text-sky-800 text-xl'/></Link>
      </div>
      {loading ? <Spinner/> : showtype=='table' ?
     (<Bookstable books={books}/>): (<Bookscard books={books}/>)
      }
    </div>
  )
}

export default Home