import React, {useState, useEffect} from 'react';
import Nav from '../../Layouts/Nav';
import Footer from '../../Layouts/Footer';
import PageTitle from '../PageTitle';
import {getUserData} from '../services/UserDataService';
import { adminPageTitle } from '../../../data/admin';

// export const adminPageTitle = {
//   pageTitle: 'Dashboard',
//   accountHolder: 'Mugabo Francis',
//   role: 'admin',
//   imgPath: '/images/user.png',
// };

  
export default function Wrapper(props) {
  const [userData, setUserData] = useState(null);

  // await getUserData().then( response=>{
  //   setUserData(response)
  // })
  // console.log(user)
  // useEffect(() => {

  //   // if( localStorage.getItem('token') != null ){ 
  //     // setUserData(getUserData())
  //     // console.log(userData)
  //     // console.log("user data ... wrapper")
  //     // setUserData({
  //     //   pageTitle: 'Dashboard',
  //     //   accountHolder: userData.name,
  //     //   role: userData.role,
  //     //   imgPath: '/images/user.png'
  //     // })
  //     console.log(getUserData())
      
  //   // }
    
  // }, [])

  useEffect(() => {

    const getUser = async () => {
      try {
        const data = await getUserData()
        // setUserData(data)
        // console.log(userData)

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
    console.log(userData);
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
