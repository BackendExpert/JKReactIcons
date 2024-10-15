import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
        <div className="md:flex hidden justify-center items-center pt-40 md">
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

        <center>
          <div className="md:hidden block md:mt-0 mt-20">
            <img src="https://avatars.githubusercontent.com/u/168010528?s=200&v=4" alt="" className='h-40 w-auto rounded-md mx-8'/>  
            <h1 className="text-center mt-4 text-xl text-purple-500 font-semibold">JKReactIcons</h1>
          </div>
        </center>

        <div className="mt-20 text-center pb-40">
            <h1 className="text-xl ">This is the Icon Framework for ReactJS Development</h1>

            <p className="my-16">
              Sri Lankan First Icon Framework - JKReactIcons
            </p>
        </div>
    </div>
  )
}

export default HomePage