import Options from './Options';

const Questions = ({ quizs }) => {
    const { question, options, correctAnswer } = quizs
    
    // console.log(correctAns);
    return (
        <div className="shadow w-[500px] mx-auto">
            <div className="flex justify-between pb-4 mt-2 p-8 text-gray-800">
                <span>Quiz No 1</span>
                <span>Question 1 out of {quizs.length}</span>
            </div>
            <div className="card-body w-[500px]">
                <div className="font-medium text-[18px]; text-gray-800 text-xl mb-3">
                    {/* {question} */}
                    {question.replace(/(<([^>]+)>)/ig, '')}
                </div> 
                {options.map(option => <Options key={option} correctAnswer={correctAnswer} option={option} />)}
            </div>
        </div>
    );
};

export default Questions;