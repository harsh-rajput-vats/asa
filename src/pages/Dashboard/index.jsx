import React, { useEffect, useState } from 'react'
import Sidebar from "./Sidenav/Sidebar"
import DashboardHeader from '../../components/DashboardHeader'
// import { useOktaAuth } from "@okta/okta-react";
import {  Route, Switch } from 'react-router-dom';
import Main from './contents/Main'
import Stage from './contents/Stage'
import  {setUser} from '../../app/User/UserSlice'
import { useDispatch } from "react-redux";
const Dashboard = () => {

    // const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    const dispatch = useDispatch()
    // useEffect(() => {
    //     if (!authState.isAuthenticated) {
    //         // When user isn't authenticated, forget any user info
    //         setUserInfo(null);
    //         dispatch(setUser(null))
    //     } else {
    //         oktaAuth.getUser().then((info) => {
    //             setUserInfo(info);
    //             dispatch(setUser(info))
    //         });
    //     }
    // }, [authState, oktaAuth]); // Update if authState changes
    // if (authState.isPending) {
    //     return <div>Loading...</div>;
    // }
    //////////Have to change it ^
    
    return (
        <div className='flex w-screen h-screen bg-background p-5 gap-6 font-Roboto'>
            <Sidebar />
            <div className='w-4/5 flex flex-col'>
                <DashboardHeader />
                <div className='w-full h-full overflow-y-scroll'>
                    <Switch>
                        <Route path='/home/dashboard' component={Main}  />
                        <Route path='/home/stages' component={Stage} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
