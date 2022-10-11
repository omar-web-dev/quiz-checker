import React from 'react';
import { Link } from 'react-router-dom';

const Crads = ({ quiz }) => {
    const {id, name, total, logo } = quiz;
    return (
        <div className="bg-white text-gray-700 w-full mx-auto rounded-2xl shadow-lg">
            <Link to={`/quiz/${id}`} rel="noopener noreferrer">
                <img className="w-full bg-gray-200 p-3 overflow-hidden hover:animate-pulse" src={logo} alt={name} />
            </Link>
            <div className=" p-3">
                <div className=" mt-2">
                    <div className='flex justify-between'>
                        <h3 className="p-2  bg-gray-200 rounded hover:animate-pulse">{name}</h3>
                        <p className="p-2 w-20 bg-gray-200 rounded hover:animate-pulse">Quiz {(total>=10)?  total : `0${total}`}</p>
                    </div>
                    <Link to={`/quiz/${id}`} rel="noopener noreferrer">
                        <button className="mt-2 p-2 w-full bg-gray-200 rounded hover:animate-pulse uppercase font-semibold">Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Crads;