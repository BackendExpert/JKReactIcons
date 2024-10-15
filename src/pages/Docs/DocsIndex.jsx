import React from 'react'
import * as Icons from '@jehankandy/jkreact-icons';

const DocsIndex = () => {
  return (
    <div className="mt-8">
        <h1 className="font-semibold text-purple-500 text-2xl">Docs</h1>
        <hr />

        <p className='my-4'>Docs and all Icons of this Framework</p>

        <p className='my-4'>These Icons Based on Bootstrap Icons </p>

        <p className='my-4'>This Icon Framework Developed using <a href="https://icons.getbootstrap.com/" target="_blank" className='text-purple-500 font-semibold'>Bootstrap Icons</a></p>

        <div className="md:grid grid-cols-4 gap-8">
            {Object.keys(Icons).map((iconName) => {
                const IconComponent = Icons[iconName];
                return (
                    <a href={ `/DocsOne/${iconName}`}>
                        <div key={iconName} className="flex flex-col items-center text-center my-4">
                            <IconComponent size={44} />
                            <span className="mt-2 text-sm">{iconName}</span>
                        </div>
                    </a>
                );
            })}
        </div>
    </div>
  )
}

export default DocsIndex