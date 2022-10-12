import React from 'react'
import "./GraphF.css"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export const GraphF = () => {
    const data = [
        { name: "Group A", value: 50 },
        { name: "Group B", value: 50 },
        { name: "Group C", value: 50 },
        { name: "Group D", value: 50 }
    ];
    const COLORS = ["#FF0000", "#0064F8", "#FECF01", "#FFA500"];


    return (
        <>
            <div className="container antr mt-5">
                <h1 id='antr'>WEIGHT PROGRESSION</h1>
                <h4 id='antrd'>Stay motivated by entering and visualizing your data every day</h4>
                <div className="graphfcontent">

                    <div className="graphfFlex1">
                        <div className='gfcont1'>
                            <h3>Weight lost(lbs)</h3>
                            <h5>Since starting using Weight Wallet</h5>
                        </div>
                        <div className='gfcont2'>
                            <h3>Ave. Weight difference</h3>
                            <h5>Since the begining, this is your average weight difference per day in lbs</h5>
                        </div>


                    </div>
                    <div className="graphfFlex2">

                        <PieChart width={500} height={300} >




                            <Pie
                                data={data}

                                innerRadius={90}
                                outerRadius={150}
                                fill="#8884d8"
                                paddingAngle={4}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                        </PieChart>
                        <div className="midcontent">
                            <h2>158.0</h2>
                            <h4>Today's</h4>
                            <h5>Weight</h5>
                        </div>
                        <div className="circleblue">
                            <h5>9.6</h5>
                        </div>
                        <div className="circlered">
                            <h5>9.0</h5>
                        </div>
                        <div className="circleorange">
                            <h5>107</h5>
                        </div>
                        <div className="circleyellow">
                            <h5>-0.08</h5>
                        </div>



                    </div>
                    <div className="graphfFlex3">
                        <div className='gfcont3'>
                            <h3>Weight left to lose(lbs)</h3>
                            <h5>By tracking and analyzing your data, you will stay motivated to reach your ideal weight</h5>
                        </div>
                        <div className='gfcont4'>
                            <h3>Days</h3>
                            <h5>By maintaining your current habits, you should reach your ideal weight on Jan 8ᵗʰ, 2023</h5>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
