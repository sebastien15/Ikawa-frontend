import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {getUserData} from '../Dashboard/services/UserDataService';

export default function Nav({ isNavTransparent }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();
  const links = [
    { path: '/', name: 'Home' },
    { path: '/institutions', name: 'Institutions' },
    { path: '/events', name: 'Events' },
    { path: '/processing', name: 'Processing' },
    { path: '/news', name: 'News' },
    { path: '/buy', name: 'Buy' },
    { path: '/coffeeshops', name: 'Coffeshops' },
  ];

  const [isMenuShown, toggleMenu] = useState(false);

  //logout function
  
  const handleLogout = () => {
    fetch('https://ikawa-backend.onrender.com/api/v1/auth/logout/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Logout successfully') {
          localStorage.removeItem('token');
          // window.location.reload();
          window.location.href = '/';
        } else {
          console.error('Logout failed: ', data.message);
        }
      })
      .catch(error => {
        console.error('Logout failed: ', error);
      });

    handleClose()
  };

  
  useEffect(() => {

    if( localStorage.getItem('token') != null ){ 
      setUserData(getUserData())
    }
    
  }, [])
  

  return (
    <header
      className={`header no-print ${isNavTransparent ? 'opacity-9' : ''}`}>
      <div className='container'>
        <div className='logo'>
          
          <img
            src='/images/logo-top.svg'
            alt='user-photo'
            width='86.18'
            height='47.64'
            onClick={() => router.push('/')}
            className='pointer'
          />
        </div>
        {!isMenuShown ? (
          <i
            onClick={() => toggleMenu(true)}
            className={`fi fs--30 text-white fi-bars-2 pointer hide-desk`}></i>
        ) : (
          <i
            onClick={() => toggleMenu(false)}
            className={`fi fs--30 text-white fi-close pointer hide-desk`}></i>
        )}
        <nav className={`top-nav ${isMenuShown ? 'left-0' : ''}`}>
          <ul>
            {links.map((link, i) => (
              <Link key={i} href={link.path}>
                {link.name}
              </Link>
            ))}
            <Link href='/dashboard' passHref>
              <button className='btn btn-primary btn-sm fs--15 h-35 mr--20 pl--20 pr--20' style={{ display: userData ? 'none' : '' }}>
                Login
              </button>
            </Link>
          </ul>
          <div className='position-relative' style={{ display: userData ? '' : 'none' }}>
            <div
              className='user-details'
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}>
              <div className='img-holder'>
                <Image
                  src='/images/user.png'
                  alt='user-photo'
                  width={40}
                  height={40}
                  quality='100'
                  className='pointer'
                />
              </div>
              <i className='fi fi-arrow-down text-white ml--15'></i>
            </div>
            <div className='drop-user-menu'  >
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  <Link href='/dashboard/'>Dashboard</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href='/dashboard/client'>My account</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Help</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
