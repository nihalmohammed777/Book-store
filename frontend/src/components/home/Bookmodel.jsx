    import React from 'react'
    import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'

    const Bookmodel = ({book,onclose}) => {
      return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 z-50 flex justify-center items-center' onClick={onclose}>
         <div onClick={(event)=>event.stopPropagation()} className='w-[600px] max-w-full h-[560px] bg-white rounded-xl p-4 flex flex-col relative'>
          <AiOutlineEdit className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
           onClick={onclose}/>
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear}
    </h2>
    <h4 className='my-2 text-gray-500'>{book._id}</h4>
    <div className='flex justify-start items-center gap-x-2'>
     <PiBookOpenTextLight className='text-red-300 text-2xl'/>
     <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex justify-start items-center gap-x-2'>
     <BiUserCircle className='text-red-300 text-2xl'/>
     <h2 className='my-1'>{book.author}</h2>
    </div>
    <p className='mt-4'>Anything u wnat to show</p>
    <p className='my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nisi, aperiam cum placeat alias eius? Corporis laudantium omnis provident beatae accusantium facilis reiciendis quidem eveniet dolore, perspiciatis, voluptatem error at quasi. Corrupti libero fuga asperiores corporis unde quo eius. Accusamus blanditiis quo incidunt neque sint asperiores repudiandae architecto esse magni at cupiditate veritatis modi, minus ipsa facere tempora corrupti, cum consectetur expedita excepturi, corporis ad. Placeat dolor sequi, sed reprehenderit consequuntur vel aliquam. Recusandae cum optio ipsum dicta excepturi odit pariatur architecto. Corporis repellendus optio dignissimos ipsam perferendis cumque atque minus repellat nisi quisquam accusantium, maiores voluptates eius ex molestiae.</p>
         </div>
        </div>
      )
    }
    
    export default Bookmodel