import React from 'react';

const Options = ({ option }) => {
    console.log(option);
    return (
        <button className="btn p2 quiz-btn btn-block ">
            {option}
        </button>
    );
};

export default Options;