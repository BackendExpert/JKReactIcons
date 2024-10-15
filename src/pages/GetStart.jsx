import React from 'react'
import CodeImgOne from '../assets/GetS1.png'
import CodeImgTwo from '../assets/GetS2.png'
import CodeImgThree from '../assets/GetS3.png'

const GetStart = () => {
  return (
    <div className='pt-12 pb-20'>
        <h1 className="text-xl font-semibold text-purple-500">Getting Start with JKReactIcons</h1>

        <div className="mt-4">
            <p className="">According to the <span className='text-purple-500'>JKReactIcons</span> you have to use the using NPM (Node Packge Manager) Package</p>
            <p className="py-4 text-purple-500 font-semibold"> - <a href="https://www.npmjs.com/package/@jehankandy/jkreact-icons" target='_blank'>JKReactIcons</a></p>
        </div>

        <hr />

        <div className="mt-4">
            <p className="text-xl font-semibold text-purple-500">Install Via NPM</p>
            <p className="mt-2">According to installing this Framework on your Project you have to use NPM (Node Packge Manager).</p>
            <p className="mt-2 text-purple-500">You have to Follow these step to install this Framework</p>
            

            <div className="my-4 ml-2">
              <h1 className="">On your Project open terminal</h1>
              <div className="ml-2 mt-2">
                <li className='font-semibold'>run following Command</li>
                <div className="">
                  <p className="mt-2 text-purple-500">npm i @jehankandy/jkreact-icons</p>
                </div>

                <li className='font-semibold mt-3'>Go to Page that you need to use Icons using this Framework</li>

                <div className="">
                  <img src={CodeImgOne} alt="" className='h-12 w-auto rounded-md mt-2'/>

                  <p className="my-4">import &#123; OneNumberFill &#125; from '@jehankandy/jkreact-icons'</p>

                  <p className="">According to your need you can change the <span className='text-purple-500 font-semibold'>&#123; OneNumberFill &#125;</span> </p>

                  <p className="my-4"><span className='text-purple-500 font-semibold'>&#123; OneNumberFill &#125;</span> in here you can use one or more icons like following</p>

                  <img src={CodeImgTwo} alt="" className='h-12 w-auto rounded-md mt-2'/>
                </div>

              </div>
            </div>

            <hr className='my-4'/>

            <div className="">
              <p className="text-xl font-semibold text-purple-500">How to use</p>

              <div className="my-4">
                <p className="">For usage of the Framwork you can use following way</p>

                <img src={CodeImgThree} alt="" className='h-20 w-auto rounded-md mt-2'/>

                <p className="py-4 text-purple-500 font-semibold">
                  &lt;OneNumberFill size=&#123;40&#125; color=&#123;"green"&#125;/&gt;
                </p>

                <p className="my-4">
                  in here size=&#123;40&#125; is the size of the Icon
                </p>

                <p className="my-4">
                  and color=&#123;"green"&#125; is the color of the Icon
                </p>

                <p className="my-4 font-semibold">
                  you can customize these size and Color
                </p>

                <a href="/Docs">
                  <button className='bg-purple-500 text-white py-2 px-4 rounded-xl'>Go to Docs</button>
                </a>



              </div>
            </div>
        </div>
    </div>
  )
}

export default GetStart