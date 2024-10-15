import React, { useState } from 'react'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const SideMenu = [
        { id: 1, name: "About", link: '/About', icon: '' },  
        { id: 2, name: "Getting Start", link: '/GetStart', icon: '' },         
        { id: 3, name: "Docs", link: '/Test', icon: '' }, 
        { id: 4, name: "Relese", link: '/Home', icon: '' },   
    ];
    
  return (
    <div className=''>
        <button className="md:hidden fixed top-2 right-4 z-50 bg-blue-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
            {!isOpen ? <div className="">X</div> : <div></div>}
        </button>
        <div className={`backdrop-blur-md bg-white/30 md:min-w-74 md:max-w-64 w-full md:w-auto h-screen md:relative fixed top-0 py-4 px-2 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            <div className="flex">
                <img src="https://avatars.githubusercontent.com/u/168010528?s=200&v=4" alt="" className='w-12 h-auto'/>
                <h1 className="mt-3 text-xl uppercase text-purple-500 text-semibold">JKReact-Icons</h1>
            </div>

            <div className="my-4 px-6">
                {
                    SideMenu.map((menu, index) => {
                        return (
                            <a href={menu.link} key={index}>
                                <div className="my-4" >
                                    <div className="">{menu.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar