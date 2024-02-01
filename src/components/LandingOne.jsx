import React from 'react';
import { useHistory } from 'react-router-dom';
// import {useKeycloak} from '../KeycloakProvider'
import graphic from '../../src/assets/logo123.png';
import { useKeycloak } from '@react-keycloak/web';

const LandingOne = () => {
  const { keycloak, initialized } = useKeycloak();
  const history = useHistory();
  // const { keycloak, isAuthenticated } = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>;
  }

  const handleLogin = () => {
    keycloak.login();
  };

  const handleButtonClick = () => {
    if (keycloak.authenticated) {
      history.push('/home/dashboard');
    } else {
      handleLogin();
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
            {/* {isAuthenticated() ? 'Back to Dashboard' : 'Login'} */}
            {'Login'}
          </button>
        </div>
      </div>
      <div className='w-5/12'>
        <img src={graphic} className='w-full h-full' alt='Logo' />
      </div>
    </div>
  );
};

export default LandingOne;
