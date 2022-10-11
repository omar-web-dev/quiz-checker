import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options = ({ option, correctAnswer }) => {

    
    const selectOption = (thisOption) => {
        if(thisOption === correctAnswer){
            toast("Correct Answare") 
        }else{
            toast("Wrong Answare") 
        }
    }

    return (
        <>
        {/* <button onClick={notify} className="btn p2 quiz-btn btn-block ">
            {option}
        </button> */}
        <button onClick={()=>selectOption(option)} className="btn p2 quiz-btn btn-block ">
            {option}
        </button>
            <ToastContainer />
        </>
    );
};

export default Options;