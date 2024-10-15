import React from 'react'
import { useParams } from 'react-router-dom'
import * as Icons from '@jehankandy/jkreact-icons';

const DocsOne = () => {
    const {id} = useParams()

    const IconComponent = Icons[id];

  return (
    <div className="mt-8">

        <h1 className="text-2xl font-semibold ">Icon : <span className='text-purple-500'>{id}</span></h1>

        <center className='my-12'>
            <IconComponent size={350}/>
        </center>

        <div className="">
                <div className="bg-gray-100 p-8 rounded text-sm font-mono whitespace-pre-wrap">
                    <div>
                        <span>{`import React from 'react';`}</span>
                    </div>
                    <div>
                        <span>{`import { ${id} } from '@jehankandy/jkreact-icons';`}</span>
                    </div>
                    <br />
                    <div>
                        <span>{`const IconDisplay = () => {`}</span>
                    </div>
                    <div className="pl-4">
                        <span>{`return (`}</span>
                    </div>
                    <div className="pl-8">
                        <span>{`<div>`}</span>
                    </div>
                    <div className="pl-12">
                        <span>{`<${id} size={40} color={"green"}/> `}</span>
                    </div>
                    <div className="pl-8">
                        <span>{`</div>`}</span>
                    </div>
                    <div className="pl-4">
                        <span>{`);`}</span>
                    </div>
                    <div>
                        <span>{`}`}</span>
                    </div>
                    <div>
                        <span>{`export default IconDisplay;`}</span>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <p className="">
                    in Above Code size is 40 and color is Green
                </p>

                <p className="text-purple-500 font-semibold">Output</p>

                <IconComponent size={40} color={"green"}/>
            </div>


            <div className="my-12">
                <div className="flex">
                    <IconComponent size={40}/> 
                    <p className="">size - 40 color - default</p>
                </div>

                <div className="flex">
                    <IconComponent size={60} color={"blue"}/> 
                    <p className="">size - 60 color - blue</p>
                </div>

                <div className="flex">
                    <IconComponent size={80} color={"purple"}/> 
                    <p className="">size - 80 color - purple</p>
                </div>

                <div className="flex">
                    <IconComponent size={100} color={"red"}/> 
                    <p className="">size - 100 color - red</p>
                </div>

                <div className="flex">
                    <IconComponent size={120} color={"yellow"}/> 
                    <p className="">size - 120 color - yellow</p>
                </div>

                <div className="flex">
                    <IconComponent size={140} color={"green"}/> 
                    <p className="">size - 140 color - green</p>
                </div>
            </div>
    </div>
  )
}

export default DocsOne