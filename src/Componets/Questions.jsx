import React from 'react';
import Options from './Options';

const Questions = ({ quizs }) => {
    const { question, options } = quizs
    return (
        <div className="shadow w-[500px] mx-auto">
            <div className="flex justify-between quiz-progress-label mt-2">
                <span>Quiz No 1</span>
                <span>Question 1 out of 10</span>
            </div>
            <div className="card-body w-[500px]">
                <div className="font-medium text-[18px];">
                    {question}
                </div>
                {options.map(option => <Options option={option} />)}
            </div>
        </div>
    );
};

export default Questions;