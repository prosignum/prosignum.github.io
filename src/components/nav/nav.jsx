import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg';
import { navItems } from './navItems';
import Logo from '../logo/logo';
import './nav.css';

function Nav() {
  const [open, setOpen] = useState(false);
  const refElement = useRef();
  const pathname = useLocation();

  const menuClick = () => {
    setOpen(!open);
  }

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className='nav'>
        <Link to='/'>
          <Logo />
        </Link>
        <ul className='nav-menu' id={open ? 'visible' : 'hidden'} ref={refElement}>
          {
            navItems.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className='nav-links'
              >
                {item.title}
              </Link>
            ))
          }
        </ul>
        <button className='menu-btn' onClick={menuClick}>
          <CgMenuGridR className={open ? 'menu-btn-active' : 'menu-btn-closed'} />
        </button>
      </nav>
    </>
  )
}

export default Nav