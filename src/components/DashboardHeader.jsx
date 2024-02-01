import React from 'react'
import { BiSolidLock } from "react-icons/bi";
// import { useOktaAuth } from '@okta/okta-react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/User/UserSlice';
import axios from 'axios';

const DashboardHeader = () => {
    // const { oktaAuth } = useOktaAuth();
    const userInfoSS = useSelector(selectUser);
    const navigate = useHistory();
    const handleLogout = async () => {
        try {
            await axios.get('http://kubernetes.docker.internal:9080/',{},{
                withCredentials: true,
            });
            window.location.href='http://kubernetes.docker.intenal:9080/auth/realms/test/protocol/openid-connect/logout'
            window.location.href='http://kubernetes.docker.internal:9080/'
        } catch(error){
            console.error('Logout failed:', error);
        }
    };
    return (
        <div className='w-full bg-white shadow-xl border-2 h-16 rounded-lg flex items-center justify-between px-9 py-4 text-primary-900 '>
            <b className='text-xl '>
                OIS PORTAL
            </b>
            <div className=' bg-white  flex items-center justify-start gap-6 cursor-pointer'>
                <span>
                   {
                    userInfoSS?.fname +" " + userInfoSS?.lname
                   }
                </span>
                <span className='text-secondary-900 text-sm'>
                    Admin
                </span>

           
                <button className='flex text-base items-center justify-center gap-1  px-1' onClick={handleLogout}>
                    <p>
                        Logout
                    </p>
                    <BiSolidLock className='h-4 w-4' />
                </button>
            </div>

        </div>
    )
}

export default DashboardHeader
