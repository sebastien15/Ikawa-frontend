import React, {useState, useEffect} from 'react';
import Nav from '../../Layouts/Nav';
import Footer from '../../Layouts/Footer';
import PageTitle from '../PageTitle';
import {getUserData} from '../services/UserDataService';
import { adminPageTitle } from '../../../data/admin';

  
export default function Wrapper(props) {
  const [userData, setUserData] = useState(null);


  useEffect(() => {

    const getUser = async () => {
      try {
        const data = await getUserData()
        
        setUserData({
          pageTitle: 'Dashboard',
          accountHolder: data.name,
          role: data.role,
          imgPath: '/images/user.png'
        })

      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [])
  
  
  return (
    <div idid='wrapper_content'>
      <Nav />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-1'></div>
          <div className='col-12 col-md-10 pt--130 pb--50 pt-mobile-80'>
            <PageTitle data={userData ? userData : adminPageTitle} />
            {props.children}
          </div>
          <div className='col-12 col-md-1'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
