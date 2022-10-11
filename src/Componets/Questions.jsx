import Options from './Options';

const Questions = ({ quizs }) => {
    const { question, options, correctAnswer } = quizs

    return (
        <li className='text-xl mt-10 font-medium md:ml-0 ml-5 text-gray-800'>
            {question.replace(/(<([^>]+)>)/ig, '')}
            <div className="shadow mt-5 md:mr-0 mr-5 ">
                <div className="card-body w-full md:w-[500px]">
                    {options.map(option => <Options key={option} correctAnswer={correctAnswer} option={option} />)}
                </div>
            </div>
        </li>
    );
};

export default Questions;