import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = useLoaderData();
    return (
        <div className='px-32 pt-10 pb-12 md:grid grid-cols-3 gap-6'>
            <LineChart width={400} height={400} data={data}>
                <Line dataKey="sell"></Line>
                <Line dataKey="revenue"></Line>
                <Line dataKey="investment"></Line>
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
            </LineChart>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#fdba74" />
                <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={110} outerRadius={150} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
            <BarChart width={400} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#fdba74" />
                <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Dashboard;