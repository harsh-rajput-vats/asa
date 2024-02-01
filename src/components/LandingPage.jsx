import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const LandingPage = () => {
  const {keycloak, initialised} = useKeycloak();

  const history = useHistory();

  const handleButtonClick = () => {
    if (keycloak.authenticated) {
    } else {
      // If not authenticated, initiate the Keycloak login process
      keycloak.login();
    }
  };
  return (
    
    <div className='w-screen px-20 my-20 flex gap-20 items-center justify-between'>
      <div className='flex items-center justify-center w-1/2'>
        <div className='flex flex-col items-start justify-center gap-5'>
          <b className='text-4xl'>Welcome to</b>
          <h1 className='text-7xl font-bold leading-normal bg-gradient-to-r from-primary-900 to-secondary-900 bg-clip-text text-transparent'>
            Operator <br />
            Intervention Service
          </h1>
          <p className='text-justify mb-10'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>

          <button
            className='bg-gradient-to-r from-primary-900 to-secondary-900 w-fit px-10 h-12 rounded-lg text-white text-xl font-semibold cursor-pointer'
            onClick={handleButtonClick}
          >
            {keycloak.authenticated ? "Back to Dashboard" : "Login"}
          </button>
        </div>
      </div>
      <div className='w-5/12'>
        <img src='logo123.png' className='w-full h-full' alt='Logo' />
      </div>
    </div>
  );
};

export default LandingPage;

