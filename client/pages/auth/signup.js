import { useState } from "react";
import Router from 'next/router'
import useRequest from "../../hooks/use-request";
import Image from "next/image";
import login_model_picture from '../../public/image.jpg'
import Link from "next/link";

const signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    });
    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    }

    return (
        // <form onSubmit={onSubmit}>
        //     <h1>Sign up</h1>
        //     <div className="form-group">
        //         <label>Email Address</label>
        //         <input
        //             value={email}
        //             onChange={e => setEmail(e.target.value)}
        //             className="form-control"></input>
        //     </div>
        //     <div className="form-group">
        //         <label>password</label>
        //         <input
        //             value={password}
        //             onChange={e => setPassword(e.target.value)}
        //             className="form-control" type="password"></input>
        //     </div>
        //     {errors}
        //     <button className="btn btn-primary">Sign up</button>
        // </form>
        <div className="flex items-center justify-center min-h-screen ">

            {/* Card container */}
            <div className="relative flex flex-col m-6 space-y-10 md:max-w-5xl bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 container">
                {/* Left Side */}
                <form onSubmit={onSubmit} className="p-6 md:p-20">
                    {/* top content */}
                    <h1 className="font-cyberFonts mb-5 text-4xl font-bold">Sign Up</h1>
                    <label>Email Address</label>
                    <input
                        value={email}
                        className="w-full p-6 border border-gray-300 rounded-md placeholder:font-cyberFonts placeholder:font-light"
                        placeholder="Enter your email address"
                        onChange={e => setEmail(e.target.value)}></input>
                    <label>password</label>
                    <input
                        value={password}
                        className="w-full p-6 border border-gray-300 rounded-md placeholder:font-cyberFonts placeholder:font-light"
                        placeholder="Enter your password"
                        onChange={e => setPassword(e.target.value)} type="password"></input>
                    {errors}

                    {/* middle content */}
                    <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                        <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-cyberFonts font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                            <span>Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="13" y1="18" x2="19" y2="12" />
                                <line x1="13" y1="6" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>
                </form>

                {/* Right Side */}
                <div className="w-[430px] hidden md:block">
                    <Image src={login_model_picture} alt="" layout="responsive" />
                </div>


                {/* close button */}
                <div
                    className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black group-hover:text-gray-600" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </Link>

                </div>
            </div>


        </div>
    );
}

export default signup;