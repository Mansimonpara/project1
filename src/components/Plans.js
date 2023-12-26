import React from 'react';

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl my-4 border h-[500px] hover:scale-105 duration-400'>
              <img img src="./assets/img/single.png" alt=" " className=' m-3 mx-auto w-[30%] h-[20%] content-center'/>
              <h1 className='font-bold m-3 text-xl text-center'>Web development</h1>
              <p className='font-bold m-3 text-2xl text-center'>$149</p>
              <div className='text-center font-medium'>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply</p>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply dummy text of the printing</p>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply dumm.</p>
                </div>
                <div className='bg-[#02DF9A] text-black text-center mx-24 p-2 w-[40%] mt-3 rounded'>
                <button >Start Trial</button>
                </div>

            </div>
            <div className='shadow-xl my-4  border h-[500px] bg-gray-100 hover:scale-105 duration-400'>
            <img img src="./assets/img/double.png" alt=" " className=' m-3 mx-auto w-[30%] h-[20%] content-center'/>
              <h1 className='font-bold m-3 text-xl text-center'>Digital Marketing</h1>
              <p className='font-bold m-3 text-2xl text-center'>$149</p> 
              <div className='text-center font-medium'>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply</p>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply dummy text of the printing</p>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply dumm.</p>
                </div>
                <div className='bg-black text-[#02DF9A] text-center mx-24 p-2  w-[40%] mt-3  rounded'>
                <button >Start Trial</button>
                </div>
              
            </div>


            <div className='shadow-xl my-4 border h-[500px] hover:scale-105 duration-400'>
            <img img src="./assets/img/triple.png" alt=" " className=' m-3 mx-auto w-[30%] h-[20%] content-center'/>
              <h1 className='font-bold m-3 text-xl text-center'>App Development</h1>
              <p className='font-bold m-3 text-2xl text-center'>$149</p>
              <div className='text-center font-medium'>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply</p>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply dummy text of the printing</p>
                <p className='border-b mx-8 py-2'>Lorem ipsum is simply dumm.</p>
                </div>
                <div  className='bg-[#02DF9A] text-black text-center mx-24 p-2  w-[40%]  mt-3 rounded'>
                <button>Start Trial</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}
