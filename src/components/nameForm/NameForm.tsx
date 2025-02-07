
import React, { Dispatch, SetStateAction, useState } from 'react'

function NameForm({username, setUsername}: {username: string, setUsername: Dispatch<SetStateAction<string>>}) {


  const [userInput, setUserInput] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(userInput);
    localStorage.setItem("user", userInput)
  }

  return (
   <div className='relative'>
     <div className="h-screen w-full flex justify-center items-center p-40">
    <div className='h-1/2 -translate-y-5 w-[48vw] relative'>
      <img className='absolute w-full' src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg" alt="" /> 
      <div className='relative'>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className='h-[36vh] uppercase flex w-[48vw] flex-col justify-center items-center'>
          <h3 className='text-1xl text-white font-medium'>welcome to the galactic port, captain</h3>
          <input value={userInput} onChange={(e) => setUserInput(e.target.value)} className='text-6xl capitalize bg-transparent mb-16 border-2 placeholder:text-white w-4/6 pt-4 pb-6 px-6 text-center outline-none text-white' type="text" placeholder='Enter your name' />
          </div>
          <div className='-bottom-3 -right-24 absolute'>
            <button className='px-10 hover:text-white hover:bg-sky-900 uppercase py-5 text-xl bg-white font-medium'>Start the journey</button>
          </div>
        </form>
      </div>
    </div>
  </div>
   </div>
  )
}

export default NameForm