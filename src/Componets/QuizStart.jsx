import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const QuizStart = () => {
    const quiz = useLoaderData()
    const {questions} = quiz.data
    // console.log(questions[0]);

    return questions.map(quizs => <Questions key={quizs.id} quizs={quizs}/>);
};

export default QuizStart;