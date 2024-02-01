import React from 'react'
import { BiSolidLock } from "react-icons/bi";
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useOktaAuth } from '@okta/okta-react';

import uidaiLogo from "../assets/uidai_english_logo.svg";
import aadhaarLogo from "../assets/aadhaar_english_logo.svg";

const Header = () => {
    // const { oktaAuth, authState } = useOktaAuth();
    return (
        <div className='h-fit'>
            <div className='flex items-center justify-between h-20 py-5 px-20'>
                <img src={uidaiLogo} alt="UIDAI Logo" className='h-20 w-60' ></img>
                <img src={aadhaarLogo} alt="Aadhaar Logo" className='h-20 w-20'></img>
            </div>
            <div className='bg-gradient-to-r from-primary-900 to-secondary-900 w-screen h-12 p-2 px-20 flex items-center justify-between text-white '  >
                <b className='text-xl'>
                    OIS PORTAL
                </b>
                {/* {
                    authState?.isAuthenticated ?
                        <button className='flex items-center justify-center gap-1 text-lg px-1' onClick={() => oktaAuth.signOut()}>
                            <p>
                                Logout
                            </p>
                            <LogoutIcon className='h-6 w-6' />
                        </button>
                        :
                        <Link to={"/home/dashboard"}>
                            <button className='flex items-center justify-center gap-1 text-lg px-1'>
                                <p>
                                    Login
                                </p>
                                <LoginIcon className='h-6 w-6' />
                            </button>
                        </Link>
                } */}

            </div>
        </div>
    )
}

export default Header
