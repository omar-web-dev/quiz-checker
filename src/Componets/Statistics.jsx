import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData()
    const { data } = quizData

    return (
        <div className='flex h-[100vh] justify-center items-center'>
            <div className='w-full h-[300px] md:w-[300px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={400} data={data}>
                        <Bar dataKey='total' stroke="#8884d8" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;