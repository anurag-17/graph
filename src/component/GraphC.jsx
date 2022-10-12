import React, { useState } from 'react'
import { Bullet } from '@ant-design/plots';
import { Gauge } from '@ant-design/plots';
import "./GraphC.css"

import 'antd/dist/antd.css';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';


export const GraphC = () => {
    const [percent, setPercent] = useState(84);
    const [percent_a, setPercent_a] = useState(79);
    const [percent_b, setPercent_b] = useState(9);

    const increase = () => {
        let newPercent = percent + 10;

        if (newPercent > 100) {
            newPercent = 100;
        }

        setPercent(newPercent);
    };

    const decline = () => {
        let newPercent = percent - 10;

        if (newPercent < 0) {
            newPercent = 0;
        }

        setPercent(newPercent);
    };


    const increase_a = () => {
        let newPercent_a = percent_a + 10;

        if (newPercent_a > 100) {
            newPercent_a = 100;
        }

        setPercent_a(newPercent_a);
    };

    const decline_a = () => {
        let newPercent_a = percent_a - 10;

        if (newPercent_a < 0) {
            newPercent_a = 0;
        }

        setPercent_a(newPercent_a);
    };
    const increase_b = () => {
        let newPercent_b = percent_b + 5;

        if (newPercent_b > 100) {
            newPercent_b = 100;
        }

        setPercent_b(newPercent_b);
    };

    const decline_b = () => {
        let newPercent_b = percent_b - 5;

        if (newPercent_b < 0) {
            newPercent_b = 0;
        }

        setPercent_b(newPercent_b);
    };
    const mystyle = {
        color: "red",

        fontFamily: "Arial"
    }

    return (
        <>
            <div className="container">
                <div className="grcContent">
                    <h1>Objective</h1>
                    <p>On your way to realizing your desired weight</p>
                </div>

                <div className="grcContentA">
                    <div className="grcContentAa">
                        <Button.Group >
                            <div className="flexGraphE_A">
                                <button type="button" class="btn colorAa" onClick={increase}>{100 - percent}%</button>
                                <Progress type="circle" className='circle' percent={percent} strokeColor="#FECF01" trailColor="#D9D9D6" width="250px" format={() => ""} strokeWidth='3' />

                                <button type="button" class="btn colorBa " onClick={decline}>{percent}%</button>
                            </div>

                        </Button.Group>
                        <div className="contentAposition">
                            <h2>16</h2>
                            <p>days</p>
                            <h4>Oct. 9th, 2022</h4>
                        </div>
                        <h3>Diet</h3>
                        <h5 className='h5font'>If you ONLY diet  going forward</h5>
                        <div className='flexrbc'>
                            <div className='rbca'>
                                <h5>Faster</h5>
                                <p>84%</p>
                            </div>
                            <div className='rbca'>
                                <h5>Average</h5>
                                <p>-0.57 <span className='superscript'>lbs/day</span></p>
                            </div>
                        </div>

                    </div>
                    <div className="grcContentAb">
                        <Button.Group>
                            <div className="flexGraphE_B">
                                <button type="button" class="btn colorAb" onClick={increase_a}>{100 - percent_a}%</button>
                                <Progress type="circle" percent={percent_a} strokeColor="#FFA500" trailColor="#D9D9D6" width="250px" strokeWidth='3' format={() => ""} />
                                <button type="button" class="btn colorBb " onClick={decline_a}>{percent_a}%</button>
                            </div>
                        </Button.Group>
                        <div className="contentBposition">
                            <h2>17</h2>
                            <p>days</p>
                            <h4>Oct. 10th, 2022</h4>
                        </div>
                        <h3>Exercise</h3>
                        <h5 className='h5font'>If you ONLY exercise going forward</h5>
                        <div className='flexrbc'>
                            <div className='rbcab'>
                                <h5>Faster</h5>
                                <p>79%</p>
                            </div>
                            <div className='rbcab'>
                                <h5>Average</h5>
                                <p>-0.42 <span className='superscript'>lbs/day</span></p>
                            </div>
                        </div>

                    </div>
                    <div className="grcContentAc">
                        <Button.Group>
                            <div className="flexGraphE_C">
                                <button type="button" class="btn colorAc" onClick={increase_b}>{percent_b}%</button>
                                <Progress type="circle" percent={percent_b} strokeColor="#FF0000" width="250px" trailColor="#D9D9D6" strokeWidth='3' format={() => ""} />
                                <button type="button" class="btn colorBc" onClick={decline_b}>{100 - percent_b}%</button>
                            </div>
                        </Button.Group>
                        <div className="contentCposition">
                            <h2>9</h2>
                            <p>days</p>
                            <h4>Oct. 2th, 2022</h4>
                        </div>
                        <div className="bottombox">
                            <h3>Diet & Exercise</h3>
                            <h5 className='h5font'>If you ONLY diet AND exercise<span className='btmspan'>going forward</span></h5>

                            <div className='flexrbc negmargin'>
                                <div className='rbcac'>
                                    <h5>Faster</h5>
                                    <p>91%</p>
                                </div>
                                <div className='rbcac'>
                                    <h5>Average</h5>
                                    <p>-0.89 <span className='superscript'>lbs/day</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

  
}
