import React from 'react';

const Navber = () => {
    return (
        <div className='px-2 lg:px-[10%]'>
            <div className="navbar bg-base-100 block">
                <div className=" flex justify-between">

                    <div className="dropdown block">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[290px] text-center">
                            <li><a>Home</a></li>
                            <li><a>Statistics </a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl lg:hidden  flex">Quizzes</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-between">
                    <a className="btn btn-ghost normal-case text-xl lg:flex hidden ">Quizzes</a>
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Statistics </a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navber;