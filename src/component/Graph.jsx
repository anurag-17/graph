import React from 'react'
import { PureComponent } from 'react';
import "./Graph.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Sector, Cell } from 'recharts';

const Graph = () => {
    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    // ];
    const data = [
        {
            name: '1',



        },
        {
            name: '2',



        },
        {
            name: '3',

            pv: '162.2',

        },
        {
            name: '4',

            pv: 163.2,

        },
        {
            name: '5',

            pv: 162.6,

        },
        {
            name: '6',

            pv: 162.4,

        },
        {
            name: '7',

            pv: 162.2,

        },
        {
            name: '8',

            pv: 160.8,

        },
        {
            name: '9',

            pv: 161.2,

        },
        {
            name: '10',

            pv: 160.8,

        },
        {
            name: '11',

            pv: 161.8,

        },
        {
            name: '12',

            pv: 161.8,

        },
        {
            name: '13',

            pv: 160.4,

        },
        {
            name: '14',

            pv: 159.8,

        },
        {
            name: '15',

            pv: 159.0,

        },
        {
            name: '16',

            pv: 158.8,

        },
        {
            name: '17',

            pv: 159.0,

        },
        {
            name: '18',

            pv: 158.8,

        },
        {
            name: '19',

            pv: 159.0,

        },
        {
            name: '20',



        },
        {
            name: '21',



        }, {
            name: '22',

            pv: 158.2,

        },
        {
            name: '23',

            pv: 158.0,

        },
        {
            name: '24',

            pv: 156.4,

        },
        {
            name: '25',

            pv: 158.8,

        },
        {
            name: '26',

            pv: 158.0,

        },
        {
            name: '27',



        },
        {
            name: '28',



        },
        {
            name: '29',



        },
        {
            name: '30',



        },

    ];
   

    class CustomizedLabel extends PureComponent {
        render() {
            const { x, y, stroke, value } = this.props;

            return (
                <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                    {value}
                </text>
            );
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className='graphMonth mb-5'>
                    <h3>September</h3>
                </div>

             


                <div className='mediaGrpahD'>
                    <h5 className='graphHeading'>Daily Weights</h5>
                    <LineChart width={1200} height={500} data={data}>
                       

                        <XAxis dataKey="name" height={60} axisLine={false} tickLine={false} label={{ value: 'September', offset: 0, position: 'insideBottom' }} />
                        <YAxis domain={[156, 164]} axisLine={false} tickLine={false} label={{ value: 'Value Title', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <ReferenceLine y={157}  stroke="black" strokeDasharray="1 1" />
                        <ReferenceLine y={159}  stroke="black" strokeDasharray="1 1" />
                        <ReferenceLine y={161}  stroke="black" strokeDasharray="1 1" />
                        <ReferenceLine y={163}  stroke="black" strokeDasharray="1 1" />
                       
                        <Line type="natural" dataKey="pv" stroke="#FF0000" strokeWidth={3} label={<CustomizedLabel />} dot={{ stroke: '#FFA500', strokeWidth: 6 }} />
                     
                    </LineChart>
                </div>
               

            </div>

        </>
    )
}

export default Graph