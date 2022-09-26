import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import { useState } from "react";

function NavBar() {

    const [nav,setNav] = useState(false);

    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'portfolio'
        },
        {
            id:4,
            link: 'experience'
        },
        {
            id:5,
            link: 'contact'
        }
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 
    text-white bg-black fixed">
        <div className="flex" >
            <h1 className="text-2xl ml-2">YannJoseph</h1>
        </div>
        <ul className="hidden md:flex">

            {links.map(({id,link} )=> (
                <li key={link.id}className=" px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200" >
                    {link}
                </li>
            ))}

        </ul>

        <div 
        onClick={() => setNav(!nav)} 
        className="cursor-pointer pr-4 z-10 text-gray-500">
            {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        
        </div>
        
    </div >
  )
};

export default NavBar