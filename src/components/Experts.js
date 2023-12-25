import React from 'react';
import laptop from "../assets/img/laptop.jpg";

export default function Experts() {
  return (
    <div className='max-w-[1240px]  mx-auto my-10  border border-black grid grid-cols-2'>
        <div className='border border-[blue]  col-span-1 w-[80%] '>
        <img src={laptop} alt=" " />
        </div>
        <div className='border border-[blue]  col-span-1 '>
            <h1>LEARN FROM EXPERTS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus cupla hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit prespiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
        </div>
    </div>
  );
}

