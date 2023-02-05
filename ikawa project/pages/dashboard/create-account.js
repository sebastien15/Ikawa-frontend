import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Nav from '../../compontents/Layouts/Nav';

export default function CreateAccount() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://ikawa-backend.onrender.com/api/v1/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });
      const result = await response.json();
      if (response.status === 201) {
        console.log('Success:', result);
        // Redirect the user to the login page or show a success message
      } else {
        console.error('Error:', result.message);
        // Show an error message
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Show an error message
    }
  };


  return (
    <>
      <Head>
        <title>Create Account</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='login pt--80'>
        <div className='login-form--area'>
          <div className='login-form--area-group'>
            <h1 className='fs--40 font-weight-bold text-center mobile-top-20px'>
              Sign up
            </h1>
            <p className='pt--10 text-center'>
              Welcome to the new, simple way to know about{' '}
              <span className='font-weight-bold'>Rwandan coffee</span>
            </p>
            <form className='pt--0' onSubmit={handleSubmit}>
              <div className='form-group position-relative  pb-mobile-1'>
                <label className='mb--0' htmlFor='email'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name'
                  className='form-control form-control-md'
                  autoComplete='off'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group position-relative  pb-mobile-1'>
                <label className='mb--0' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Ex: someone@gmail.com'
                  className='form-control form-control-md pb-mobile-1'
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group position-relative pb-mobile-1'>
                <label className='mb--0' htmlFor='password'>
                  Password
                </label>
                <input onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  name='password'
                  placeholder='Min. 8 characters'
                  className='form-control form-control-md'
                  autoComplete='off'
                />
              </div>
              <div className='form-group pb-mobile-1'>
                <label className='mb--0' htmlFor='select_options'>
                  What is your role?
                </label>
                <select onChange={(e) => setRole(e.target.value)}
                  id='select_options'
                  className='form-control form-control-md bs-select'>
                  <option value='user'>User</option>
                  <option value='admin'>Admin</option>
                  <option value='farmer'>Farmer</option>
                  
                </select>
              </div>
              <div className='form-group mt--15 pb-mobile-1'>
                <label className='form-checkbox form-checkbox-primary mb--0'>
                  <input type='checkbox' name='checkbox' defaultChecked />
                  <i></i>{' '}
                  <span className='fs--15'>
                    <span className='font-weight-bold'>I agree to the </span>
                    <Link href='/'>
                      <span className='font-weight-normal pointer'>
                        Terms & Conditions
                      </span>
                    </Link>
                  </span>
                </label>
              </div>
              <div className='form-group position-relative pt--10 pb--20'>
                <button className='btn btn-primary w-100p' type='submit'>
                  Create account
                </button>
              </div>
            </form>

            <span className='fs--16 d-block text-center mobile-top-20px'>
              Already have an account?
              <Link href='/dashboard'>
                <span className='font-weight-bold pointer text-primary-green'>
                  {' '}
                  SIGN IN
                </span>
              </Link>
            </span>

            <Link href='/'>
              <p className=' fs--14 text-center pt--30 pointer'>
                Terms & condition | Privacy Policy{' '}
              </p>
            </Link>
          </div>
        </div>
        <div className='register-details'>
          <div className='register-details-container'>
            <h1 className='fw-300 text-dark fs--30'>
              Get started and get all the information on the{' '}
              <span className='font-weight-bold text-primary-green'>
                Rwandan coffee
              </span>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
