import React from 'react'
import { Bullet } from '@ant-design/plots';
import { Gauge } from '@ant-design/plots';
import "./Grap2.css"
const Graph2 = () => {
    //    

    const data = {
        complete: 50,
        target: 100
    }



    const config = {

        percent: data.complete / data.target,
        range: {
            color: 'l(0) 0:#e34739 1:#e34739',

        },

        radius: 150,
        innerRadius: 0.95,
        startAngle: 1.5 * Math.PI,
        endAngle: 1.49 * Math.PI,
        indicator: null,

        statistic: {
            title: {
                offsetY: -36,

                style: {
                    fontSize: '36px',

                    color: '#4B535E',
                    lineHeight: '390px',
                },
                formatter: () => (data.complete / data.target) * 100 + "%",
            },
            content: {
                style: {
                    fontSize: '24px',
                    lineHeight: '390px',

                    color: '#4B535E',
                },
                formatter: () => 'done',
            },
        },
    };
    const dataforline = [
        {
            title: 'timeline',
            ranges: [0, 100],
            measures: [data.complete, (data.target - data.complete)],
            target: 100,
        },
    ];
    const configforline = {
        data: dataforline,
        measureField: 'measures',
        rangeField: 'ranges',
      
        targetField: 'target',
        xField: 'title',


        color: {
            range: 'white',
            measure: ['red', 'blue'],
            target: '#fff',

        },
        bulletStyle: {
             fill: 'red',
    fillOpacity: 0.5,
    stroke: 'black',
    lineWidth: 1,
    lineDash: [4,5],
    strokeOpacity: 0.7,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: 'pointer'
        },

        label: {
            measure: {
                offsetY: 50,
                position: 'bottom',
                style: {
                    fill: 'black',
                    fontSize: 24
                },
            },
        },
        xAxis: {
            line: null
        },
        yAxis: {
            tickInterval: 50
        },
       
        tooltip: {
            showMarkers: true,
            shared: true,
        },
        
    };

    return (
        <>
            <Gauge {...config} className="Guagerotate" />
            <br />
            <br />
            <br />
            <br />
            <Bullet {...configforline} />
        </>

    )
}


export default Graph2