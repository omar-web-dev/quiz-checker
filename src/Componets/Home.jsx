import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Crads from './Crads';
import Header from './Header'

const Home = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const quizStartHandelar = (quiz) =>{
        console.log('click', quiz);
    }
    return (
        <div>
            <Header />
            <div className='mt-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-3 lg:px-[10%]'>
                {data.map(quiz => <Crads key={quiz.id} quiz={quiz} quizStartHandelar={quizStartHandelar}/>)}
            </div>
        </div>
    );
};

export default Home;