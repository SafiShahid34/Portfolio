import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <header className='flex justify-between px-5 py-2 bg-primary text-white'>
        <a href="/" classname="logo text-2x1 font-bold text-accent">Safi</a>
        
        <nav className='hidden md:block'>
            <ul className='flex'>
                <li>
                    < a href="/" >About</a>
                </li>
                <li>
                    < a href="/" >Projects</a>
                </li>
                <li>
                    < a href="/" >Blog</a>
                    </li>
                <li>
                    < a href="/" >Contact</a>
                    </li>
                <li>
                    < a href="/" >Resume</a>
                    </li>
            </ul>
        </nav>

        <nav className={
            !toggle
                ? 'mobile-nav left-[-100%] '
                : 'mobile-nav left-0'
        }
        >
            <ul className='flex flex-col'>
                <li>
                    < a href="/" >About</a>
                </li>
                <li>
                    < a href="/" >Projects</a>
                </li>
                <li>
                    < a href="/" >Blog</a>
                    </li>
                <li>
                    < a href="/" >Contact</a>
                    </li>
                <li>
                    < a href="/" >Resume</a>
                    </li>
            </ul>
        </nav>


        <button onClick={handleToggle} className='block md:hidden'>
            {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
        </button>
    </header>
  )
}

export default Header