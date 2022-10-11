import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Crads from './Crads';

const Quiz = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    return (
        <div>
          <div className='mt-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-3 lg:px-[10%]'>
                {data.map(quiz => <Crads key={quiz.id} quiz={quiz} />)}
            </div>
        </div>
    );
};

export default Quiz;