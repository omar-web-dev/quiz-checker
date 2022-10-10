import React from 'react';

const Header = () => {
    return (
        <div className=" bg-gray-100 lg:px-[10%]">
            <div className="block md:flex items-center">
                <div className="mt-10 p-10 text-center w-[calc( 50% - 10px)]">
                    <img src={'https://www.backgroundchecks.com/hubfs/images/persona/operations/hero-banner.svg'} alt="hero-banner" width="481" />
                </div>
                <div className="imgtxt-text  w-[calc( 50% - 10px)] lg:mt-10 p-10 ">
                    <div className="imgtxt-headline width6 regular-heading lg:p-0 p-5">
                        <p className="text-2xl  text-[#0A40CE]">
                            <span className="text-[#0A40CE] uppercase font-normal" >Operations managers</span>
                        </p>
                        <h1 className='text-3xl text-[#001b5a] mt-3 lg:text-4xl font-[800]'><strong>Get the right <br /> background check for <br /> every  job</strong></h1>

                        <buttom className="mt-3 btn w-full text-xl p-3 h-16 ">
                            I'm ready now.
                            <span className='rounded-full  caret-lime-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 bg-[#191d24] h-10  ">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                                </svg>

                            </span>
                        </buttom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;