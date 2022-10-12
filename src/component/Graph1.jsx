import React from 'react'
import "./Graph1.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export const Graph1 = () => {
    const data = [
        {
            name: 'Jan',
            x: 60
        },
        {
            name: 'feb',
            x: 40
        },
        {
            name: 'Mar',
            x: 50
        },
        {
            name: 'Apr',
            x: 62
        },
        {
            name: 'May',
            x: 50
        },
        {
            name: 'Jun',
            x: 100
        },
        {
            name: 'Jul',
            x: 40
        },
        {
            name: 'Ago',
            x: 70
        },
        {
            name: 'Sep',
            x: 30
        },
        {
            name: 'Oct',
            x: 40
        },
        {
            name: 'Nov',
            x: 60
        },
        {
            name: 'Dec',
            x: 70
        },
    ]
    return (
        <>
            <div className="container fontA">
                <div className="contentA">
                    <h1>Weight loss per month</h1>
                    <p>Is a great way to visualise how you are doing</p>
                </div>
                <div className="contentB">
                    <div className="contentBa">
                        <ResponsiveContainer>
                            <BarChart
                                width={600}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barGap={0}

                            >

                                <XAxis dataKey="name" tickLine={false} />
                                <YAxis tickLine={false} label={{ value: 'lbs', angle: "-90", position: 'insideLeft', fontSize: "20px" }} />
                                <Tooltip />


                                <Bar dataKey="x" fill="#FFA500" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="contentBb">
                        <h2>Average weight </h2>
                        <h2>loss per month</h2>
                        <h1>2.3 lbs / month</h1>
                        <br />

                        <p>On average since the begining</p>
                    </div>
                </div>
            </div>
        </>
    )
}
