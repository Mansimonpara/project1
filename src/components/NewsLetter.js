import React from 'react';

export default function NewsLetter() {
    return (
        <div className='w-full bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                    <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='m-2'>
                    <input type='text' className='l rounded p-3 mb-2 mr-2 text-slate-600' placeholder='Email'/>
                    <button className='bg-black text-white p-3 rounded'>Get started</button>
                    <br/>
                    <p className='text-white'>We care bout the protection of your data. Read our<br/><a href='' className='text-black'> Privacy Policy.</a></p>

                </div>
            </div>
        </div>
      );
    
}
 
