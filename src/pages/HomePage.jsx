import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
        <div className="flex justify-center items-center pt-40">
            <div className="">
              <img src="https://avatars.githubusercontent.com/u/139304882?s=200&v=4" alt="" className='h-40 w-auto rounded-md mx-8'/>  
              <h1 className="text-center mt-4 text-xl text-purple-500 font-semibold">JKCSS</h1>
            </div> + 

            <div className="">
              <img src="https://avatars.githubusercontent.com/u/167443241?s=200&v=4" alt="" className='h-40 w-auto rounded-md mx-8'/> 
              <h1 className="text-center mt-4 text-xl text-purple-500 font-semibold">ReactJKCSS</h1>
            </div> + 
            
            <div className="">
              <img src="https://avatars.githubusercontent.com/u/168010528?s=200&v=4" alt="" className='h-40 w-auto rounded-md mx-8'/>  
              <h1 className="text-center mt-4 text-xl text-purple-500 font-semibold">JKReactIcons</h1>
            </div>
        </div>

        <div className="mt-20 text-center pb-40">
            <h1 className="text-xl ">This is the Icon Framework for ReactJS Development</h1>
        </div>
    </div>
  )
}

export default HomePage