import Booksinglecrad from "./Booksinglecrad"


const Bookscard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((item)=>(
          <Booksinglecrad key={item._id} book={item}/>
        ))}
    </div>
  )
}

export default Bookscard