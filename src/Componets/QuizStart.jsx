import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const QuizStart = () => {
    const quiz = useLoaderData()
    const { questions, name } = quiz.data
    const count = questions.length

    return (
        <div >
            <div className='mt-10 text-center text-xl'>
                <h1>Quiz of  {name}</h1>
                <p>Total Questions: {(count >= 10) ? count : `0${count}`}</p>
            </div>
            <div className=''>
            </div>
            <div >
                <ol className='list-decimal w-full p-5 md:p-0  md:w-[500px] mx-auto' >
                    {questions.map(quizs => <Questions key={quizs.id} quizs={quizs} />)};
                </ol>
            </div>
        </div>
    )
};

export default QuizStart;