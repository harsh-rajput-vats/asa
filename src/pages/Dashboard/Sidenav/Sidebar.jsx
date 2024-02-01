import React, { useEffect, useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi';
import { BsBarChartSteps } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import uidaiLogo from "../../../assets/uidai_english_logo.svg";
import aadhaarLogo from "../../../assets/aadhaar_english_logo.svg";
const navs = [
    {
        id: 1,
        name: 'Dashboard',
        link: "dashboard",
        icon: <BiSolidDashboard />
    },
    {
        id: 1,
        name: 'Stages',
        link: "stages",
        icon: <BsBarChartSteps />
    }
]
const Sidebar = () => {
    const [active, setActive] = useState("dashboard");
    const naviagte = useHistory();
    useEffect(() => {
        const path = window.location.pathname.split("/")[2];
        setActive(path);
    }, [])
    return (
        <div className='lg:w-1/5 w-32  bg-white shadow-xl border-2 h-full rounded-xl '>
            <div className='p-10 flex flex-col items-center justify-end gap-2'>
                <img src={aadhaarLogo} alt="Aadhaar Logo" className='h-24 w-24'></img>
                <img src={uidaiLogo} alt="UIDAI Logo" className='h-20 w-60' ></img>
            </div>
            <div className='w-10/12 h-fit'>
                {navs.map((nav) => (
                    <div className={nav.link === active ? "bg-gradient-to-r from-primary-900 to-secondary-900 flex items-center px-12 py-4 mb-2 gap-4 rounded-r-full text-2xl text-white cursor-pointer" : "flex items-center px-12 py-5 mb-2 gap-4 rounded-r-full text-2xl text-secondary-900 cursor-pointer"}
                        onClick={() => {
                            setActive(nav.link);
                            naviagte.push(nav.link);
                        }}
                    >
                        <div className='h-7 w-7'>

                            {nav.icon}
                        </div>
                        <p className=' invisible lg:visible text-lg'>
                            {nav.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
