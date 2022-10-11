import Options from './Options';

const Questions = ({ quizs }) => {
    const { question, options, correctAnswer } = quizs

    // console.log(correctAns);
    return (


            <li className='text-xl mt-10 font-medium text-gray-800'>
                {question.replace(/(<([^>]+)>)/ig, '')}
                <div className="shadow mt-5 ">
                    <div className="card-body w-[500px]">
                        {options.map(option => <Options key={option} correctAnswer={correctAnswer} option={option} />)}
                    </div>
                </div>
            </li>
    );
};

export default Questions;