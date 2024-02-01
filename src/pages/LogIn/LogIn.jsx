import React from 'react';
import uidaiLogo from "../../assets/uidai_english_logo.svg";
import aadhaarLogo from "../../assets/aadhaar_english_logo.svg";
import Header from "../../components/Header";
const LogIn = () => {

    const style = {
        boxShadow: '0 5px 0 0 rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)'
    }


    return (
        <div className='h-screen w-screen font-Roboto'>
            {/* <div  className='flex items-center justify-between h-20 py-5 px-20'>
                <img src={uidaiLogo} alt="UIDAI Logo" className='h-20 w-60' ></img>
                <img src={aadhaarLogo} alt="Aadhaar Logo" className='h-20 w-20'></img>
            </div> */}
            <Header />
            <div className='mt-40' >
            <div className=" flex items-center justify-center ">


                <div className="bg-white rounded-b-lg shadow-md max-w-md  w-full
                ">
                    <div className='bg-gradient-to-r rounded-t-lg from-primary-900 to-secondary-900 w-full h-12 p-2 flex items-center justify-center text-white '  >
                        <span> Single Sign-On to OIS Portal</span>
                    </div>
                    {/* <h1 className="text-2xl font-bold mb-6">Your Header</h1> */}
                    <form>
                        <div className=" pt-8 pl-8 pr-8 mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="text"
                                placeholder="Enter your ADID"
                            />
                        </div>

                        <div className="  pt-4 pl-8 pr-8 pb-4 mt-1 mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className='pt-2 pb-5 flex items-center justify-center'><button
                            className=" bg-gradient-to-r from-primary-900 to-secondary-900 p-8 hover:bg-blue-700 text-white font py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Submit
                        </button></div>
                        
                    </form>
                </div>
            </div>



        </div>
        </div>
    )
}

export default LogIn