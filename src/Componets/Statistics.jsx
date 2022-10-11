import React from 'react';
import { LineChart, Line } from 'recharts';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        quiz: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        quiz: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        quiz: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        quiz: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        quiz: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        quiz: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        quiz: 4300,
        amt: 2100,
    },
];


const Statistics = () => {
    return (
        <div>
            <h1>Start</h1>
            <LineChart className='h-[400px] w-[500]' data={data} >
                <Line type="monotone" dataKey="quiz" stroke="#8884d8" />
            </LineChart>
            <h1>End</h1>
        </div>
    );
};

export default Statistics;