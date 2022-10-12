import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./GraphbB.css"

export const GraphB = () => {
    const data = [
        {
            name: 'January',
            x: 3.9,
            y: 4.2,
            z: 5,
            a: 3.9,
            b: 1.2,
        },
        {
            name: 'Febuary',
            x: 2.5,
            y: 4.2,
            z: 2,
            a: 2.9
        },
        {
            name: 'March',
            x: 3.8,
            y: 1.8,
            z: 2.2,
            a: 3.5,

        },
        {
            name: 'April',
            x: 4.2,
            y: 3.9,
            z: 2.7,
            a: 4.2
        },
        {
            name: 'May',
            x: 3.9,
            y: 2.5,
            z: 5,
            a: 2.9,
            b: 2.7
        },
        {
            name: 'June',
            x: 3.9,
            y: 2.5,
            z: 2.0,
            a: 1.9
        },
        {
            name: 'July',
            x: 3.9,
            y: 3.2,
            z: 3.0,
            a: 3.5,
            b: 3.0
        },
        {
            name: 'August',
            x: 3.9,
            y: 3.2,
            z: 3.0,
            a: 3.5
        },
        {
            name: 'September',
            x: 3.9,
            y: 3.2,
            z: 3.0,
            a: 3.5
        },
        {
            name: 'October',
            x: 3.9,
            y: 3.2,
            z: 3.0,
            a: 3.5,
            b: 1.9,
        },
        {
            name: 'November',
            x: 3.9,
            y: 3.2,
            z: 3.0,
            a: 3.5,
        },
        {
            name: 'December',
            x: 3.9,
            y: 3.2,
            z: 3.0,
            a: 3.5,
        },

    ]
    return (
        <>
            <div className="container fontA">
                <div className="contentA">
                    <h1>Weight loss per week</h1>
                    <p>Is a great way to visualise how you are doing</p>
                </div>
                <div className="content2B">
                    {/* add class to make graph responsive "table-responsive " */}
           

                        <BarChart
                            width={1200}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}
                            barGap={0}

                        >
                            <CartesianGrid strokeDasharray="4 1 " horizontal={false} width={1} />


                            <XAxis dataKey="name" tickLine={false} fill="#463E3F" />
                            <YAxis tickCount={9} tickLine={false} ticks={[0, 1.3, 2.5, 3.8, 5]} strokeDasharray="4 1 2" />
                            <Tooltip />


                            <Bar dataKey="x" fill="#FECF01" barSize={15} />
                            <Bar dataKey="y" fill="#FFA500" barSize={15} />
                            <Bar dataKey="z" fill="#FF0000" barSize={15} />
                            <Bar dataKey="a" fill="#0064F8" barSize={15} />
                            <Bar dataKey="b" fill="#872AEC" barSize={15} />


                        </BarChart>
                  



                </div>
            </div>
        </>
    )

}
